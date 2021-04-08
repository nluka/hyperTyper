const pageLoader = new PageLoader(
  elements = {
    loaderGif: loader_img,
    overlay: loaderOverlay_div
  }
);

const navbar = new Navbar(
  elements = {
    itemsList: navbarItems_ul,
    expandItemsListButton: expandNavbarItemsList_button
  }
);

const wpmTable = new WpmTable(
  elements = {
    table: wpmStatistics_table,
    toggleVisibilityButton: toggleVisibilityWpmStatistics_button,
    lastGameCell: wpmLastGame_td,
    lastTenGamesCell: wpmLastTenGames_td,
    averageToDateCell: wpmAverageToDate_td,
    allTimeBestCell: wpmAllTimeBest_td
  }
);

const accuracyTable = new AccuracyTable(
  elements = {
    table: accuracyStatistics_table,
    toggleVisibilityButton: toggleVisibilityAccuracyStatistics_button,
    lastGameCell: accuracyLastGame_td,
    lastTenGamesCell: accuracyLastTenGames_td,
    averageToDateCell: accuracyAverageToDate_td,
    allTimeBestCell: accuracyAllTimeBest_td
  }
);

const participationTable = new ParticipationTable(
  elements = {
    table: participationStatistics_table,
    toggleVisibilityButton: toggleVisibilityParticipationStatistics_button,
    playtimeCell: playtime_td,
    gamesCompletedCell: gamesCompleted_td,
    gamesAbandonedCell: gamesAbandoned_td,
    gamesDisqualifiedCell: gamesDisqualified_td,
    gamesCheatedCell: gamesCheated_td
  }
);

function main() {
  navbar.addToggleItemsListVisibilityButtonClickEventListener();
  applyStoredVisibilitySettingsForAllCollapsibleElements();
  addButtonClickEventListenersForAllElementVisibilityTogglers();
  refreshAllTables();
  clearStatisticsStorage_button.addEventListener(
    "click",
    clearStatisticsButtonClickEventHandler
  );
  pageLoader.removeOverlay();
  delete pageLoader;
}

function applyStoredVisibilitySettingsForAllCollapsibleElements() {
  ElementVisibility.applyStoredVisibilitySettings(
    args = {
      collapsibleElement: wpmTable.tableElement,
      collapsibleElementId: WpmTable.ELEMENT_ID,
      toggleVisibilityButtonElement: wpmTable.toggleVisibilityButtonElement,
      defaultVisibilityBool: WpmTable.DEFAULT_IS_VISIBLE_BOOL,
    }
  );
  ElementVisibility.applyStoredVisibilitySettings(
    args = {
      collapsibleElement: accuracyTable.tableElement,
      collapsibleElementId: AccuracyTable.ELEMENT_ID,
      toggleVisibilityButtonElement: accuracyTable.toggleVisibilityButtonElement,
      defaultVisibilityBool: AccuracyTable.DEFAULT_IS_VISIBLE_BOOL
    }
  );
  ElementVisibility.applyStoredVisibilitySettings(
    args = {
      collapsibleElement: participationTable.tableElement,
      collapsibleElementId: ParticipationTable.ELEMENT_ID,
      toggleVisibilityButtonElement: participationTable.toggleVisibilityButtonElement,
      defaultVisibilityBool: ParticipationTable.DEFAULT_IS_VISIBLE_BOOL
    }
  );
}

function addButtonClickEventListenersForAllElementVisibilityTogglers() {
  ElementVisibility.addToggleButtonClickEventListener(
    args = {
      collapsibleElement: wpmTable.tableElement,
      collapsibleElementId: WpmTable.ELEMENT_ID,
      toggleVisibilityButtonElement: toggleVisibilityWpmStatistics_button
    }
  );
  ElementVisibility.addToggleButtonClickEventListener(
    args = {
      collapsibleElement: accuracyTable.tableElement,
      collapsibleElementId: AccuracyTable.ELEMENT_ID,
      toggleVisibilityButtonElement: toggleVisibilityAccuracyStatistics_button
    }
  );
  ElementVisibility.addToggleButtonClickEventListener(
    args = {
      collapsibleElement: participationTable.tableElement,
      collapsibleElementId: ParticipationTable.ELEMENT_ID,
      toggleVisibilityButtonElement: toggleVisibilityParticipationStatistics_button
    }
  );
}

function refreshAllTables() {
  wpmTable.refreshAllValuesFromStatisticsStorage();
  wpmTable.renderAllCells();
  accuracyTable.refreshAllValuesFromStatisticsStorage();
  accuracyTable.renderAllCells();
  participationTable.refreshAllValuesFromStatisticsStorage();
  participationTable.renderAllCells();
}

function clearStatisticsButtonClickEventHandler() {
  const didUserPressOk = confirm(
    "Are you sure you want to clear your statistics?\n" +
    "This cannot be undone."
  );
  if (!didUserPressOk) {
    return;
  }
  StatisticsStorage.removeAllItems();
  refreshAllTables();
}

main();