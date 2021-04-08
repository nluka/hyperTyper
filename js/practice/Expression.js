class Expression {
  static DEFAULT_TEXT = "Click the Start button or select the box below and hit Enter to play.";
  static NO_PHRASE_ITEM_COLLECTIONS_SELECTED_TEXT = "<Expression mode> is set to 'Phrase' but no <Item Collections> are selected. Please select at least 1 item collection to generate a phrase.";
  static CHEATING_TEXT = "Cheating was detected, the attempt has been terminated. If you are on mobile, make sure you are not using autocorrect or autocomplete."

  constructor(element, elementHtmlId) {
    this.element = element;
    this.elementHtmlId = elementHtmlId;
    this.spanElements = [];
    this.cursorSpanElement = null;
    // this.cursor = {
    //   isSet: null,
    //   elementSetAt: null
    // };
    this.areThereIncompletedCharacters = null;
  }

  startLoadingState() {
    this.element.classList.remove("error");
    this.setInnerText("Generating expression...");
    this.loadingIntervalId = setInterval(() => {
      switch (this.element.innerText) {
        case "Generating expression":
        case "Generating expression.":
        case "Generating expression..":
          this.element.innerText += ".";
          break;
        case "Generating expression...":
        default:
          this.element.innerText = "Generating expression";
          break;
      }
    }, 300);
  }

  setInnerText(string) {
    this.element.innerText = string;
  }

  renderError(errorText) {
    this.element.classList.add("error");
    this.setInnerText(errorText);
    this.element.animate(
      [
        // keyframes
        {
          borderColor: "var(--border-color-secondary)"
        },
        {
          borderColor: "red"
        },
        {
          borderColor: "var(--border-color-secondary)"
        }
      ],
      {
        // timing options
        duration: 150,
        iterations: 1,
        easing: "ease-out"
      }
    );
  }

  initialize(gameText) {
    this.stopLoadingState();
    this.makeUnselectable();
    this.clearInnerText();
    this.render(gameText);
    this.areThereIncompletedCharacters = true;
  }

  stopLoadingState() {
    clearInterval(this.loadingIntervalId);
  }

  undoLoadingState() {
    this.stopLoadingState();
    this.setInnerText(Expression.DEFAULT_TEXT);
  }

  render(text) {
    this.renderContent(text.content);
    this.renderAuthor(text.author);
  }

  renderContent(content) {
    const contentCharacters = content.split("");
    this.spanElements = [];
    contentCharacters.forEach((character) => {
      this.renderContentSpanElement(character)
    });
    this.renderNullSpanElement();
  }

  renderContentSpanElement(character) {
    const characterSpan = this.createSpanElementWithInnerText(character);
    this.element.appendChild(characterSpan);
  }

  createSpanElementWithInnerText(text) {
    const spanElement = document.createElement("span");
    spanElement.innerText = text;
    this.spanElements.push(spanElement);
    return spanElement;
  }

  renderNullSpanElement() {
    const nullSpan = this.createSpanElementWithInnerText("");
    nullSpan.classList.add("null");
    this.element.appendChild(nullSpan);
  }

  renderAuthor() {
    return;
  }

  clearInnerText() {
    this.element.innerText = "";
  }

  setDefault() {
    this.setInnerText(Expression.DEFAULT_TEXT);
  }

  makeSelectable() {
    this.element.classList.remove("unselectable");
  }

  makeUnselectable() {
    this.element.classList.add("unselectable");
  }

  isCursorSet() {
    return (this.cursorSpanElement !== null);
  }

  setCursorToToFirstCharacter() {
    const firstCharacter_span = document.querySelector(`#${this.elementHtmlId} > span`);
    this.setCursorTo(firstCharacter_span);
  }

  setCursorTo(spanElement) {
    //this.clearCursor();
    spanElement.classList.add("cursor");
    this.cursorSpanElement = spanElement;
  }

  clearCursor() {
    if (this.isCursorSet()) {
      this.removeCursorFrom(this.cursorSpanElement);
    }
  }

  removeCursorFrom(spanElement) {
    spanElement.classList.remove("cursor");
    this.cursorSpanElement = null;
  }

  labelElementAsMistake(spanElement) {
    spanElement.classList.add("mistake");
  }

  isElementLabeledAsMistake(spanElement) {
    return spanElement.classList.contains("mistake");
  }

  removeElementLabelMistake(spanElement) {
    spanElement.classList.remove("mistake");
  }

  setElementAsIncompleted(spanElement) {
    spanElement.classList.remove("correct");
    spanElement.classList.remove("incorrect-non-whitespace");
    spanElement.classList.remove("incorrect-whitespace");
  }

  setElementAsCorrect(spanElement) {
    spanElement.classList.remove("incorrect-non-whitespace");
    spanElement.classList.remove("incorrect-whitespace");
    spanElement.classList.add("correct");
  }

  setElementAsIncorrect(spanElement) {
    spanElement.classList.remove("correct");
    if (spanElement.innerText === " ") {
      spanElement.classList.add("incorrect-whitespace");
      return;
    }
    spanElement.classList.add("incorrect-non-whitespace");
  }

  isElementNullSpan(spanElement) {
    return spanElement.classList.contains("null");
  }
}