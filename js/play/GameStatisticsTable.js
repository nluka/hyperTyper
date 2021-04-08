class GameStatisticsTable {
  constructor({ wpmCell, accuracyCell, textLengthCell, timeElapsedCell }) {
    this.wpm = wpmCell;
    this.accuracy = accuracyCell;
    this. textLength = textLengthCell;
    this.timeElapsed = timeElapsedCell;
    //console.log("GameStatisticsTable object insantiated");
  }

  setWpmCellInnerText(wpm, { decimalPlaces }) {
    this.wpm.innerText = wpm.toFixed(decimalPlaces);
  }

  setAccuracyCellInnerText(accuracy, { decimalPlaces }) {
    this.accuracy.innerText = accuracy.toFixed(decimalPlaces) + "%";
  }

  setTextLengthCharsCellInnerText(numOfChars, { decimalPlaces }) {
    this.textLength.innerText = numOfChars.toFixed(decimalPlaces);
  }

  setTimeElapsedCellInnerText(seconds, { decimalPlaces }) {
    this.timeElapsed.innerText = seconds.toFixed(decimalPlaces);
  }
}
