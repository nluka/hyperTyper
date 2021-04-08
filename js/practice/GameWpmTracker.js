class GameWpmTracker {
  static INACTIVE_STATE_TEXT = "— WPM";

  constructor(element) {
    this.element = element;
    this.intervalId = null;
  }

  clear() {
    this.setInnerText(GameWpmTracker.INACTIVE_STATE_TEXT);
  }

  start() {
    this.setInnerText(this.getFormattedGrossWpmString(0));
    this.intervalId = setInterval(() => {
      this.update();
    }, MILLISECONDS_PER_SECOND);
  }

  setInnerText(string) {
    this.element.innerText = string;
  }

  update() {
    const grossWpm = this.calculateGrossWpm(gameInput.charactersTypedCount, gameTimer.timeStarted);
    const grossWpmFormattedString = this.getFormattedGrossWpmString(grossWpm);
    this.setInnerText(grossWpmFormattedString);
  }

  calculateGrossWpm(charactersTyped, startTime) {
    const words = charactersTyped / CHARACTERS_PER_WORD;
    const minutes = (new Date() - startTime) / (SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND);
    const wordsPerMinute = words / minutes;
    if (wordsPerMinute < 0) {
      return 0;
    }

    return wordsPerMinute;
  }

  getFormattedGrossWpmString(wpm) {
    return `${Math.floor(wpm)} WPM`;
  }

  stop() {
    if (this.intervalId === null) {
      return;
    }
    clearInterval(this.intervalId);
    this.update();
  }
}