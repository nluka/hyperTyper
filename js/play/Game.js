class Game {
  constructor(input_el) {
    this.input_element = input_el;

    this.state = {
      isActive: false,
      isDisqualified: false,
      wasSuddenDeathTriggered: false,
      wasCheatingAttempted: false,
      wasAborted: false,
    };

    this.expression = {
      text: null,
      author: null,
    };

    this.input = {
      completedChars: [],
      currentCombinedLength: null, // * completedChars + inputElementChars
      previousCombinedLength: null, // *
      numOfCharsTyped: null,
      numOfMistakesMade: null,
    };

    this.result = {
      wpm: null,
      mistakes: null,
      accuracy: null,
    };

    //console.log("Game object instantiated");
  }

  start() {
    if (this.state.isActive) return;
    this.state.isActive = true;
    this.input_element.addEventListener("input", gameInputEventCallback);
    this.input_element.focus();
    //console.log("Game started");
  }

  initialize() {
    //console.log("Game initializing");
    this.input_element.removeAttribute("placeholder");
    this.resetDataMembers();
  }

  resetDataMembers() {
    this.state.isActive = false;
    this.state.isDisqualified = false;
    this.state.wasCheatingAttempted = false;
    this.state.wasReset = false;

    this.expression.text = null;
    this.expression.author = null;

    this.input.completedChars = [];
    this.input.currentCombinedLength = 0;
    this.input.previousCombinedLength = 0;
    this.input.numOfCharsTyped = 0;
    this.input.numOfMistakesMade = 0;

    this.result.wpm = 0;
    this.result.mistakes = 0;
    this.result.accuracy = 0;

    //console.log("Game data members reset");
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
      //console.log("Cheating detected");
      endGame("cheated");
      alert("Cheating was detected. The attempt has been terminated.");
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

    /* loop through every span tag whose state could have changed from the last
     * time this method was called */
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
          const prevCharsTypedArray = mistakeAnalysis.userErrorsMap.get(i).charsTyped;
          let newCharsTypedArray = prevCharsTypedArray;
          newCharsTypedArray.push(correspondingInputChar);
          mistakeAnalysis.userErrorsMap.set(
            i,
            {
              errorCount: mistakeAnalysis.userErrorsMap.get(i).errorCount + 1,
              charsTyped: newCharsTypedArray
            }
          );
        }
        if (settings.isSuddenDeathEnabled) {
          sound.play("suddenDeathBuzzer");
          endGame("disqualified");
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
    //  } span tags in expression`
    //);

    this.input.previousCombinedLength = this.input.currentCombinedLength;

    if (numOfMistakesInBuffer > 0) this.markInputElementAsIncorrect();
    else if (numOfMistakesInBuffer === 0) {
      if (
        inputElementChars[inputElementChars.length - 1] === " " ||
        !hasTheFirstNullCharBeenMarked
      ) {
        inputElementChars.forEach((char) => {
          this.input.completedChars.push(char);
        });
        this.input_element.value = "";
        // console.log(this.input.completedChars);
        if (!hasTheFirstNullCharBeenMarked) endGame("completed");
      }
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

  terminate() {
    //console.log(
    //  "Game killed, isSuddenDeath is set to",
    //  settings.isSuddenDeathEnabled
    //);
    this.state.wasCheatingAttempted = true;
  }

  disqualify() {
    //console.log("Game disqualified");
    this.state.isDisqualified = true;
    this.input_element.setAttribute(
      "placeholder",
      "Disqualified (sudden death was on)"
    );
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
