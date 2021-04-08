class GameInput {
  constructor(element) {
    this.element = element;
    this.completedCharacters = [];
    this.currentCharacterCount = null;
    this.previousCharacterCount = null;
    this.charactersTypedCount = null;
    this.containsMistakes = null;
    this.totalMistakeCount = null;
  }

  static inputEventDuringIdleHandlerForInstance(instance) {
    instance.clearElementValue();
  }

  clearElementValue() {
    this.element.value = "";
  }

  getElementValue() {
    return this.element.value;
  }

  getElementContentsAsArray() {
    return this.getElementValue().split("");
  }

  getElementContentsLength() {
    return this.getElementContentsAsArray().length;
  }

  removeInputDuringIdleEventListener() {
    this.element.removeEventListener(
      "input",
      GameInput.inputEventDuringIdleHandlerForInstance(this)
    );
  }

  initialize(gameText) {
    this.resetVariables();
    this.gameText = gameText;
    this.element.removeAttribute("placeholder");
    this.element.focus();
  }

  resetVariables() {
    this.completedCharacters = [];
    this.currentCharacterCount = 0;
    this.previousCharacterCount = 0;
    this.charactersTypedCount = 0;
    this.containsMistakes = false;
    this.totalMistakeCount = 0;
  }

  setPageFocusToElement() {
    this.element.focus();
  }

  checkForCheating() {
    return (this.currentCharacterCount - this.previousCharacterCount) > 1;
  }

  markElementAsIncorrect() {
    this.element.classList.add("player-input-incorrect");
  }

  unmarkElementAsIncorrect() {
    this.element.classList.remove("player-input-incorrect");
  }

  updateCompletedCharacters() {
    const elementContents = this.getElementContentsAsArray();
    const lastElementContentsIndex = this.getElementContentsLength() - 1;
    if (this.containsMistakes || elementContents[lastElementContentsIndex] !== " ") {
      return;
    }
    elementContents.forEach((character) => {
      this.completedCharacters.push(character);
    });
    this.clearElementValue();
  }

  cleanup() {
    this.clearElementValue();
    this.unmarkElementAsIncorrect();
  }

  showDisqualificationPlaceholderText() {
    this.element.setAttribute("placeholder", "Disqualified (instant death was on)");
  }
}