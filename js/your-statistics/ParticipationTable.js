class ParticipationTable {
  static ELEMENT_ID = "participationTable";
  static DEFAULT_IS_VISIBLE_BOOL = true;

  constructor(
    elements = {
      table,
      toggleVisibilityButton,
      playtimeCell,
      gamesCompletedCell,
      gamesAbandonedCell,
      gamesDisqualifiedCell,
      gamesCheatedCell
    }
  ) {
    this.tableElement = elements.table;
    this.toggleVisibilityButtonElement = elements.toggleVisibilityButton;
    this.playtimeCellElement = elements.playtimeCell;
    this.gamesCompletedCellElement = elements.gamesCompletedCell;
    this.gamesAbandonedCellElement = elements.gamesAbandonedCell;
    this.gamesDisqualifiedCellElement = elements.gamesDisqualifiedCell;
    this.gamesCheatedCellElement = elements.gamesCheatedCell;
  }

  refreshAllValuesFromStatisticsStorage() {
    this.playtimeInSecondsValue = StatisticsStorage.getPlaytimeInSeconds({ decimalPlaces: 1 });
    this.gamesCompletedValue = StatisticsStorage.getGamesCompleted({ decimalPlaces: 0 });
    this.gamesAbandonedValue = StatisticsStorage.getGamesAborted({ decimalPlaces: 0 });
    this.gamesDisqualifiedValue = StatisticsStorage.getGamesDisqualified({ decimalPlaces: 0 });
    this.gamesCheatedValue = StatisticsStorage.getGamesCheated({ decimalPlaces: 0 });
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
    this.renderPlaytimeCell();
    this.renderGamesCompletedCell();
    this.renderGamesAbandonedCell();
    this.renderGamesDisqualifiedCell();
    this.renderGamesCheatedCell();
  }

  renderPlaytimeCell() {
    this.renderCell(
      this.playtimeCellElement,
      ParticipationTable.getFormattedPlaytimeString(
        this.playtimeInSecondsValue,
        { decimalPlaces: 1 }
      )
    );
  }

  static getFormattedPlaytimeString(playtimeInSeconds, options = { decimalPlaces }) {
    if (playtimeInSeconds === null || playtimeInSeconds <= 0) return "0 mins";
    if (playtimeInSeconds < SECONDS_PER_HOUR)
      return (playtimeInSeconds / SECONDS_PER_MINUTE).toFixed(options.decimalPlaces) + " mins";
    return (playtimeInSeconds / SECONDS_PER_HOUR).toFixed(options.decimalPlaces) + " hours";
  }

  renderGamesCompletedCell() {
    this.renderCell(this.gamesCompletedCellElement, this.gamesCompletedValue);
  }

  renderGamesAbandonedCell() {
    this.renderCell(this.gamesAbandonedCellElement, this.gamesAbandonedValue);
  }

  renderGamesDisqualifiedCell() {
    this.renderCell(this.gamesDisqualifiedCellElement, this.gamesDisqualifiedValue);
  }

  renderGamesCheatedCell() {
    this.renderCell(this.gamesCheatedCellElement, this.gamesCheatedValue);
  }
}