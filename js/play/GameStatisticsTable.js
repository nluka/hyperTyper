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

  setMostRecentTextLengthStoredValueTo(value) {
    if (value < 1) {
      throw new Error(
        "GameStatisticsTable.setMostRecentTextLengthStoredValueTo tried to store a value less than 1"
      );
    }
    localStorage.setItem("mostRecentTextLength", value.toFixed(0));
  }

  setMostRecentTimeElapsedStoredValueTo(value) {
    if (value < 0) {
      throw new Error(
        "GameStatisticsTable.setMostRecentTimeElapsedStoredValueTo tried to store a value less than 0"
      );
    }
    localStorage.setItem(
      "mostRecentTimeElapsed",
      value.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)
    );
  }

  // renderPreviousValues() {
  //   if (this.previousWpmValue != null) {
  //     this.setWpmCellInnerText(this.previousWpmValue, {
  //       decimalPlaces: 1,
  //     });
  //   }
  //   if (this.previousAccuracyValue != null) {
  //     this.setAccuracyCellInnerText(this.previousAccuracyValue, {
  //       decimalPlaces: 1,
  //     });
  //   }
  //   if (this.previousTextLengthCharsValue != null) {
  //     this.setTextLengthCharsCellInnerText(this.previousTextLengthCharsValue, {
  //       decimalPlaces: 0,
  //     });
  //   }
  //   if (this.previousTimeElapsedValue != null) {
  //     this.setWpmCellInnerText(this.previousTimeElapsedValue, {
  //       decimalPlaces: 2,
  //     });
  //   }
  // }
}
