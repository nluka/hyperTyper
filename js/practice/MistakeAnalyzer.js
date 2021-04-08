class MistakeAnalyzer {
  static ELEMENT_ID = "mistakeAnalyzer";
  static DEFAULT_IS_VISIBLE_BOOL = true;
  static TOOLTIP_MAX_DETAILED_MISTAKES = 3;
  static NO_MISTAKES_MADE_MESSAGE = "Congratulations, you made no mistakes!";
  static DEFAULT_CHARACTER_ANALYSIS_TEXT = "Click a highlighted character for details";

  constructor(
    elements = {
      container,
      toggleVisibilityButton,
      analyzedExpression,
      characterAnalysis
    }
  ) {
    this.containerElement = elements.container;
    this.toggleVisibilityButtonElement = elements.toggleVisibilityButton;
    this.analyzedExpressionElement = elements.analyzedExpression;
    this.characterAnalysisElement = elements.characterAnalysis;

    this.cursorSpanElement = null;
  }

  initialize(textLength) {
    this.map = new Map();
    for (let i = 0; i < textLength; i++) {
      this.map.set(i, {
        mistakeCount: 0,
        incorrectCharacters: []
      });
    }
  }

  addMistake(index, incorrectCharacter) {
    const previousMapValue = this.map.get(index);
    const previousMistakeCount = previousMapValue.mistakeCount;
    const newMistakeCount = previousMistakeCount + 1;
    const previousIncorrectCharacters = previousMapValue.incorrectCharacters;
    let newIncorrectCharacters = previousIncorrectCharacters;
    newIncorrectCharacters.push(incorrectCharacter);
    this.set(index, newMistakeCount, newIncorrectCharacters);
  }

  set(index, mistakeCount, incorrectCharacters) {
    this.map.set(
      index,
      {
        mistakeCount: mistakeCount,
        incorrectCharacters: incorrectCharacters
      }
    );
  }

  render(gameTextContent, mistakeCount) {
    if (mistakeCount === 0) {
      this.setAnalyzedExpressionInnerText(MistakeAnalyzer.NO_MISTAKES_MADE_MESSAGE);
      return;
    }

    this.clearElementInnerText(this.analyzedExpressionElement);
    this.setCharacterAnalysisInnerText(MistakeAnalyzer.DEFAULT_CHARACTER_ANALYSIS_TEXT);

    gameTextContent.split("").forEach((character, index) => {
      this.renderExpressionSpan(character, index);
    });

    ElementVisibility.set(this.characterAnalysisElement, true);
  }

  setAnalyzedExpressionInnerText(string) {
    this.analyzedExpressionElement.innerText = string;
  }

  setCharacterAnalysisInnerText(string) {
    this.characterAnalysisElement.innerText = string;
  }

  clearElementInnerText(element) {
    element.innerText = "";
  }

  renderExpressionSpan(character, index) {
    const spanElement = this.createSpanWithText(character);
    this.analyzedExpressionElement.appendChild(spanElement);

    const mapValueAtIndex = this.map.get(index);
    const mistakeCount = mapValueAtIndex.mistakeCount;

    if (mistakeCount <= 0) {
      return;
    }

    this.applyStylesForSpan(spanElement, mistakeCount);

    this.addClickEventListenerForExpressionSpan(spanElement, mapValueAtIndex);
  }

  createSpanWithText(text) {
    const new_span = document.createElement("span");
    new_span.innerText = text;
    return new_span;
  }

  applyStylesForSpan(spanElement, mistakeCount) {
    if (mistakeCount < 1) {
      throw `mistakeCount (${mistakeCount}) < 1`;
    }
    if (mistakeCount > 3) {
      spanElement.setAttribute("data-mistake-count", ">3");
      return;
    }
    spanElement.setAttribute("data-mistake-count", mistakeCount);
  }

  addClickEventListenerForExpressionSpan(spanElement, mapValue) {
    const mistakeCount = mapValue.mistakeCount;
    const incorrectCharacters = mapValue.incorrectCharacters;
    spanElement.addEventListener("click", () => {
      this.clearExpressionCursor();
      this.setExpressionCursorTo(spanElement);
      let text = `Mistakes [${mistakeCount}]: `;
      incorrectCharacters.forEach((character, index) => {
        if (character === " ") {
          character = "⎵";
        }
        text += character;
        if (index < incorrectCharacters.length - 1) {
          text += " ";
        }
      });
      this.setCharacterAnalysisInnerText(text);
    });
  }

  clearExpressionCursor() {
    if (this.cursorSpanElement !== null) {
      this.removeExpressionCursorFrom(this.cursorSpanElement);
    }
  }

  removeExpressionCursorFrom(spanElement) {
    spanElement.classList.remove("cursor");
    this.cursorSpanElement = null;
  }

  setExpressionCursorTo(spanElement) {
    spanElement.classList.add("cursor");
    this.cursorSpanElement = spanElement;
  }
}