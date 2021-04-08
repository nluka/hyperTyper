class GameWpmTracker {
  constructor(element) {
    this._element = element;
    this.intervalId = undefined;
    //console.log("GameWpmTracker object instantiated");
  }

  start() {
    this._element.innerText = "0 WPM";
    this.intervalId = setInterval(wpmTrackerIntervalCallback, 1000);
  }

  calcAndUpdateInnerText() {
    const words = game.input.numOfCharsTyped / CHARACTERS_PER_WORD;
    const minutes = (new Date() - gameTimer.timeStarted) / (60 * 1000);
    let wpm = words / minutes;
    if (wpm < 0) wpm = 0;
    this._element.innerText = `${Math.floor(wpm)} WPM`;
  }

  stop() {
    if (this.intervalId == undefined) return;
    clearInterval(this.intervalId);
    this.calcAndUpdateInnerText();
    //console.log("GameWpmTracker stopped and updated one last time");
  }
}

const wpmTrackerIntervalCallback = () => {
  gameWpmTracker.calcAndUpdateInnerText();
};
