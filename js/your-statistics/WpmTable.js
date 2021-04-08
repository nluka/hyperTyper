class WpmTable {
  static ELEMENT_ID = "wpmTable";
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
    this.lastGameValue = StatisticsStorage.getWpmLastGameIfExists({ decimalPlaces: 1 });
    this.lastTenGamesValue = StatisticsStorage.getWpmLastTenGamesIfExists({ decimalPlaces: 1 });
    this.averageToDateValue = StatisticsStorage.getWpmAverageToDateIfExists({ decimalPlaces: 1 });
    this.allTimeBestValue = StatisticsStorage.getWpmAllTimeBestIfExists({ decimalPlaces: 1 });
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