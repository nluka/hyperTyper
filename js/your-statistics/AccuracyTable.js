class AccuracyTable {
  static ELEMENT_ID = "accuracyTable";
  static DEFAULT_IS_VISIBLE_BOOL = true;

  constructor(
    elements = {
      table,
      toggleVisibilityButton,
      lastGameCell,
      lastTenGamesCell,
      averageToDateCell,
      allTimeBestCell
    }
  ) {
    this.tableElement = elements.table;
    this.toggleVisibilityButtonElement = elements.toggleVisibilityButton;
    this.lastGameCellElement = elements.lastGameCell;
    this.lastTenGamesCellElement = elements.lastTenGamesCell;
    this.averageToDateCellElement = elements.averageToDateCell;
    this.allTimeBestCellElement = elements.allTimeBestCell;
  }

  refreshAllValuesFromStatisticsStorage() {
    this.lastGameValue = StatisticsStorage.getAccuracyLastGameIfExists({ decimalPlaces: 1 });
    this.lastTenGamesValue = StatisticsStorage.getAccuracyLastTenGamesIfExists({ decimalPlaces: 1 });
    this.averageToDateValue = StatisticsStorage.getAccuracyAverageToDateIfExists({ decimalPlaces: 1 });
    this.allTimeBestValue = StatisticsStorage.getAccuracyAllTimeBestIfExists({ decimalPlaces: 1 });
  }

  renderCell(cellElement, value) {
    if (value === null) {
      this.renderNullSymbolForCell(cellElement);
      return;
    }
    this.setCellInnerText(cellElement, value);
  }

  renderNullSymbolForCell(cellElement) {
    this.setCellInnerText(cellElement, "···");
  }

  setCellInnerText(cellElement, text) {
    cellElement.innerText = text;
  }

  renderAllCells() {
    this.renderLastGameCell();
    this.renderLastTenGamesCell();
    this.renderAverageToDateCell();
    this.renderAllTimeBestCell();
  }

  renderLastGameCell() {
    this.renderCell(this.lastGameCellElement, this.lastGameValue);
  }

  renderLastTenGamesCell() {
    this.renderCell(this.lastTenGamesCellElement, this.lastTenGamesValue);
  }

  renderAverageToDateCell() {
    this.renderCell(this.averageToDateCellElement, this.averageToDateValue);
  }

  renderAllTimeBestCell() {
    this.renderCell(this.allTimeBestCellElement, this.allTimeBestValue);
  }
}