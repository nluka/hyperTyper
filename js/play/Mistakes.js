class MistakeAnalysis {
  constructor(element) {
    this._element = element;
    //console.log("MistakeAnalysis object instantiated");
  }

  createAndInitNewUserErrorsMap(expressionLengthInChars) {
    this.userErrorsMap = new Map();
    for (let i = 0; i < expressionLengthInChars; i++) {
      this.userErrorsMap.set(i, 0);
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

      const numOfMistakesMade = this.userErrorsMap.get(index);
      if (numOfMistakesMade > 0) {
        char_span.classList.add("tooltip-container");
        const tooltipText_span = document.createElement("span");
        tooltipText_span.classList.add("tooltip-text");
        tooltipText_span.innerText = `${numOfMistakesMade} error`;
        if (numOfMistakesMade > 1) tooltipText_span.innerText += "s";
        char_span.append(tooltipText_span);

        if (numOfMistakesMade === 1) {
          char_span.classList.add("one-mistake");
        } else if (numOfMistakesMade === 2) {
          char_span.classList.add("two-mistakes");
        } else {
          char_span.classList.add("three-or-more-mistakes");
        }
      }
    });
  }
}
