class GameActionButton {
  constructor(element) {
    this._element = element;
    //console.log("GameActionButton object instantiated");
  }

  enableStartState() {
    this._element.addEventListener("click", runGame);
    this._element.innerText = "Start";
    this._element.removeAttribute("disabled");
    //console.log("GameActionButton start state enabled");
  }

  disableStartState() {
    this._element.removeEventListener("click", runGame);
    this._element.innerText = "Abort";
    this._element.setAttribute("disabled", "true");
    this._element.blur();
    //console.log("GameActionButton start state disabled");
  }

  enableAbortState() {
    this._element.innerText = "Abort";
    this._element.addEventListener("click", abortButtonClickCallback);
    this._element.removeAttribute("disabled");
    //console.log("GameActionButton abort state enabled");
  }

  disableAbortState() {
    this._element.innerText = "Start";
    this._element.removeEventListener("click", abortButtonClickCallback);
    this._element.setAttribute("disabled", "true");
    this._element.blur();
    //console.log("GameActionButton abort state disabled");
  }
}

const abortButtonClickCallback = () => {
  endGame("aborted");
};
