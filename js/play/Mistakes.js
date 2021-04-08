class MistakeAnalysis {
  constructor(element) {
    this._element = element;
    //console.log("MistakeAnalysis object instantiated");
  }

  createAndInitNewUserErrorsMap(expressionLengthInChars) {
    this.userErrorsMap = new Map();
    for (let i = 0; i < expressionLengthInChars; i++) {
      this.userErrorsMap.set(i, {
        errorCount: 0,
        charsTyped: []
      });
    }
  }

  renderAnalyzedExpression(numOfMistakesMade) {
    if (numOfMistakesMade === 0) {
      this._element.innerText = "Congratulations, you made no mistakes!";
      return;
    }

    this._element.innerText = "";

    game.expression.text.split("").forEach((char, index) => {
      const char_span = document.createElement("span");
      char_span.innerText = char;
      this._element.append(char_span);

      const userErrorMapValueAtIndex = this.userErrorsMap.get(index);

      //const numOfMistakesMade = this.userErrorsMap.get(index);

      if (userErrorMapValueAtIndex.errorCount <= 0) return;

      char_span.classList.add("tooltip-container");
      const tooltipText_span = document.createElement("span");
      tooltipText_span.classList.add("tooltip-text");

      if (userErrorMapValueAtIndex.errorCount > 3) {
        tooltipText_span.innerText = "3+ error"
      } else {
        tooltipText_span.innerText =
        `${userErrorMapValueAtIndex.errorCount} error`;
      }
      if (userErrorMapValueAtIndex.errorCount > 1) {
        tooltipText_span.innerText += "s";
      }
      tooltipText_span.innerText += ": ";

      for (
        let i = 0;
        (i < userErrorMapValueAtIndex.charsTyped.length) && (i < 3);
        i++
      ) {
        if (userErrorMapValueAtIndex.charsTyped[i] === " ") {
          // replace spaces with visible char
          tooltipText_span.innerText += "⎵";
        } else {
          tooltipText_span.innerText += userErrorMapValueAtIndex.charsTyped[i];
        }
        if ((i < userErrorMapValueAtIndex.errorCount - 1) && (i < 2)) {
          tooltipText_span.innerText += ", ";
        }
      }

      char_span.append(tooltipText_span);

      if (userErrorMapValueAtIndex.errorCount === 1) {
        char_span.classList.add("one-mistake");
      } else if (userErrorMapValueAtIndex.errorCount === 2) {
        char_span.classList.add("two-mistakes");
      } else {
        char_span.classList.add("three-or-more-mistakes");
      }
    });
  }
}
