class GameActionButton {
  constructor(element) {
    this.element = element;
  }

  setInnerText(string) {
    this.element.innerText = string;
  }

  enableStartState() {
    this.setInnerText("Start");
    this.element.addEventListener("click", GameActionButton.startButtonClickEventHandler);
    this.element.removeAttribute("disabled");
  }

  disableStartState() {
    this.element.blur();
    this.element.setAttribute("disabled", true);
    this.element.removeEventListener("click", GameActionButton.startButtonClickEventHandler);
    this.setInnerText("···");
  }

  enableAbortState() {
    this.setInnerText("Abort");
    this.element.addEventListener("click", GameActionButton.abortButtonClickEventHandler);
    this.element.removeAttribute("disabled");
  }

  disableAbortState() {
    this.element.blur();
    this.element.setAttribute("disabled", true);
    this.element.removeEventListener("click", GameActionButton.abortButtonClickEventHandler);
    this.setInnerText("···");
  }

  static startButtonClickEventHandler() {
    GameDirector.runGame();
  }

  static abortButtonClickEventHandler() {
    GameDirector.stopGame(GameDirector.STOP_CODES.GAME_ABORTED);
  }
}