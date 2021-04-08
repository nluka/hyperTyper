class Game {
  constructor(input_el) {
    this.input_element = input_el;
    //console.log("Game object instantiated");
  }

  // DATA MEMBERS
  state = {
    isActive: false,
    isDisqualified: false,
    wasKilled: false,
    wasCheatingAttempted: false,
    wasAborted: false,
  };
  expression = {
    text: null,
    author: null,
  };
  input = {
    completedChars: [],
    currentCombinedLength: null, // * completedChars + inputElementChars
    previousCombinedLength: null, // *
    numOfCharsTyped: null,
    numOfMistakesMade: null,
  };
  result = {
    wpm: null,
    mistakes: null,
    accuracy: null,
  };

  start() {
    if (this.state.isActive) return;
    this.state.isActive = true;
    this.input_element.addEventListener("input", gameInputEventCallback);
    this.input_element.focus();
    //console.log("Game started");
  }

  initialize() {
    //console.log("Game initializing");
    this.resetDataMembers();
  }

  resetDataMembers() {
    //console.log("Resetting game data members");

    this.state.isDisqualified = false;
    this.state.wasCheatingAttempted = false;
    this.state.wasReset = false;
    //console.log("> state variables reset");

    this.input.completedChars = [];
    this.input.currentCombinedLength = 0;
    this.input.previousCombinedLength = 0;
    this.input.numOfCharsTyped = 0;
    this.input.numOfMistakesMade = 0;
    //console.log("> input variables reset");
  }

  update() {
    const expression_spans = expression_div.querySelectorAll("span");
    const inputElementChars = this.input_element.value.split("");

    this.unmarkInputElementAsIncorrect();

    this.input.currentCombinedLength =
      this.input.completedChars.length + inputElementChars.length;

    const inputCombinedLengthDiff =
      this.input.currentCombinedLength - this.input.previousCombinedLength;

    let numOfCharsDeletedThisEvent = 0;

    if (inputCombinedLengthDiff > 1) {
      this.state.wasCheatingAttempted = true;
      //console.log("Cheating detected");
      endGame("disqualified");
      alert("Cheating was detected. The game has been aborted.");
      return;
    } else if (inputCombinedLengthDiff === 1) {
      this.input.numOfCharsTyped++;
    } else if (inputCombinedLengthDiff < 1) {
      numOfCharsDeletedThisEvent += Math.abs(inputCombinedLengthDiff);
      if (this.input.currentCombinedLength > 0) {
        for (
          let i = this.input.currentCombinedLength;
          i >= this.input.previousCombinedLength;
          i--
        ) {
          expression.removeAllColoredTextClassesFromSpan(expression_spans[i]);
        }
      }
    }

    let hasTheFirstNullCharBeenMarked = false;
    let numOfMistakesInBuffer = 0;

    for (
      let i = this.input.completedChars.length;
      i <=
        this.input.previousCombinedLength +
          numOfCharsDeletedThisEvent +
          inputCombinedLengthDiff && i < expression_spans.length;
      i++
    ) {
      const char_span = expression_spans[i];
      const correspondingInputChar =
        inputElementChars[i - this.input.completedChars.length];

      if (correspondingInputChar == null) {
        expression.removeAllSpanStyles(char_span);
        if (char_span.classList.contains("mistake")) {
          expression.removeMistakeLabelFromSpan(char_span);
        }
        if (!hasTheFirstNullCharBeenMarked) {
          expression.styleSpanAsCurrentChar(char_span);
          hasTheFirstNullCharBeenMarked = true;
        }
      } else if (correspondingInputChar !== char_span.innerText) {
        numOfMistakesInBuffer++;
        expression.unstyleSpanAsCurrentChar(char_span);
        expression.styleSpanAsIncorrectChar(char_span);
        if (!char_span.classList.contains("mistake")) {
          expression.labelSpanAsMistake(char_span);
          this.input.numOfMistakesMade++;
          mistakeAnalysis.userErrorsMap.set(
            i,
            mistakeAnalysis.userErrorsMap.get(i) + 1
          );
        }
        if (settings.isSuddenDeathEnabled) {
          game.state.isDisqualified = true;
          sound.play("suddenDeathBuzzer");
          endGame("killed");
          return;
        }
      } else if (correspondingInputChar === char_span.innerText) {
        expression.styleSpanAsCorrectChar(char_span);
      }
    }

    //console.log(
    //  `Game.update() looped through ${
    //    this.input.previousCombinedLength +
    //    numOfCharsDeletedThisEvent +
    //    inputCombinedLengthDiff -
    //    this.input.completedChars.length +
    //    1
    //  } span tags`
    //);

    if (numOfMistakesInBuffer > 0) this.markInputElementAsIncorrect();

    if (
      inputElementChars[inputElementChars.length - 1] === " " &&
      numOfMistakesInBuffer === 0
    ) {
      for (let i = 0; i < inputElementChars.length; i++) {
        this.input.completedChars.push(inputElementChars[i]);
      }
      this.input_element.value = "";
    }

    this.input.previousCombinedLength = this.input.currentCombinedLength;

    if (numOfMistakesInBuffer === 0 && !hasTheFirstNullCharBeenMarked) {
      for (let i = 0; i < inputElementChars.length; i++) {
        this.input.completedChars.push(inputElementChars[i]);
      }
      this.input_element.value = "";
      endGame("completed");
    }
  }

  markInputElementAsIncorrect() {
    playerText_input.classList.add("player-input-incorrect");
  }

  unmarkInputElementAsIncorrect() {
    playerText_input.classList.remove("player-input-incorrect");
  }

  cleanup() {
    //console.log("Game cleanup initiated");

    this.input_element.removeEventListener("input", gameInputEventCallback);
    this.input_element.value = "";
    if (this.input_element.classList.contains("player-input-incorrect")) {
      this.input_element.classList.remove("player-input-incorrect");
    }
    //console.log("> player text input frozen and styles reset");

    this.state.isActive = false;
  }

  abort() {
    this.state.wasAborted = true;
    //console.log("Game aborted");
  }

  end() {
    //console.log("Game ending");

    this.result.wpm = calculateWpm(
      this.expression.text.length,
      gameTimer.timeElapsedInSeconds
    );
    //console.log("> calculated WPM =", this.result.wpm);

    this.result.accuracy = calculateAccuracyPercentage(
      this.expression.text.length,
      this.input.numOfCharsTyped,
      this.input.numOfMistakesMade
    );
    //console.log("> calculated accuracy % =", this.result.accuracy);
  }

  kill() {
    //console.log(
    //  "Game killed, isSuddenDeath is set to",
    //  settings.isSuddenDeathEnabled
    //);
    this.state.wasKilled = true;
  }

  disqualify() {
    //console.log("Game disqualified");
    this.state.isDisqualified = true;
  }
}

const gameInputEventCallback = () => game.update();

const calculateWpm = (textLengthChars, secondsElapsed) => {
  return textLengthChars / CHARACTERS_PER_WORD / (secondsElapsed / 60);
};

const calculateAccuracyPercentage = (
  textLengthInChars,
  numOfCharsTyped,
  numOfMistakes
) => {
  return (textLengthInChars / (numOfCharsTyped + numOfMistakes)) * 100;
};
