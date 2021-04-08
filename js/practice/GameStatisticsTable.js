class GameStatisticsTable {
  static ELEMENT_ID = "gameStatisticsTable";
  static DEFAULT_IS_VISIBLE_BOOL = true;

  constructor(
    elements = {
      table,
      toggleVisibilityButton,
      wpmCell,
      accuracyCell,
      textLengthCell,
      timeElapsedCell
    }
  ) {
    this.tableElement = elements.table;
    this.toggleVisibilityButtonElement = elements.toggleVisibilityButton;
    this.wpmCellElement = elements.wpmCell;
    this.accuracyCellElement = elements.accuracyCell;
    this.textLengthCellElement = elements.textLengthCell;
    this.timeElapsedCellElement = elements.timeElapsedCell;
  }

  updateForGameCompletion(
    results = {
      wordsPerMinute,
      accuracyPercentage,
      textLength,
      timeElapsedInSeconds
    }
  ) {
    this.setWpmCellInnerText(results.wordsPerMinute, { decimalPlaces: 1 });
    this.setAccuracyCellInnerText(results.accuracyPercentage, { decimalPlaces: 1 });
    this.setTextLengthCharsCellInnerText(results.textLength, { decimalPlaces: 0 });
    this.setTimeElapsedCellInnerText(results.timeElapsedInSeconds, { decimalPlaces: 2 });
  }

  setWpmCellInnerText(wpm, { decimalPlaces }) {
    this.wpmCellElement.innerText = wpm.toFixed(decimalPlaces);
  }

  setAccuracyCellInnerText(accuracy, { decimalPlaces }) {
    this.accuracyCellElement.innerText = accuracy.toFixed(decimalPlaces) + "%";
  }

  setTextLengthCharsCellInnerText(numOfChars, { decimalPlaces }) {
    this.textLengthCellElement.innerText = numOfChars.toFixed(decimalPlaces);
  }

  setTimeElapsedCellInnerText(seconds, { decimalPlaces }) {
    this.timeElapsedCellElement.innerText = seconds.toFixed(decimalPlaces);
  }
}