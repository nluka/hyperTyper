function handleInternetExplorer() {
  if (!isBrowserInternetExplorer()) {
    return;
  }
  const internetExplorerOverlay_div = document.createElement("div");
  internetExplorerOverlay_div.classList.add("internet-explorer-overlay");
  internetExplorerOverlay_div.innerText =
    "This website uses features which are not supported by the Internet Explorer web browser. " +
    "Please use a different web browser such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Opera to access this page.";
  html_body.appendChild(internetExplorerOverlay_div);
}

function isBrowserInternetExplorer() {
  const userAgent = navigator.userAgent;
  // MSIE used to detect old browsers and Trident used to detect newer ones
  return (userAgent.indexOf("MSIE ") > -1) || (userAgent.indexOf("Trident/") > -1);
}

handleInternetExplorer();

const pageLoader = new PageLoader(elements = { loaderGif: loader_img, overlay: loaderOverlay_div });

const navbar = new Navbar(
  elements = {
    itemsList: navbarItems_ul,
    expandItemsListButton: expandNavbarItemsList_button
  }
);

const gameTimer = new GameTimer(gameTimer_div);

const gameWpmTracker = new GameWpmTracker(gameWpmTracker_div);

const gameActionButton = new GameActionButton(gameAction_button);

const expression = new Expression(expression_div, expression_div.getAttribute("id"));

const gameInput = new GameInput(game_input);

const keyboardVisual = new KeyboardVisual(keyboardVisual_div);

const settingsMenu = new SettingsMenu(
  elements = {
    menuContainer: settingsMenu_div,
    toggleVisibilityButton: toggleVisibilitySettingsMenu_button,

    countdownCheckbox: countdown_checkbox,
    expressionModeSelect: expressionMode_select,
    instantDeathCheckbox: instantDeath_checkbox,
    keyboardVisualCheckbox: keyboardVisual_checkbox,
    punctuationCheckbox: punctuation_checkbox,
    trackStatisticsCheckbox: trackStatistics_checkbox,

    soundEffectsCheckbox: soundEffects_checkbox,
    soundVolumeRange: soundVolume_range,

    phraseContainer: phraseSettingsContainer_div,
    phraseItemsNumberInput: phraseItemsNumber_input,
    englishWordsCommonCollectionButton: englishWordsCommonCollection_button,
    englishWordsRandomCollectionButton: englishWordsRandomCollection_button,
    numbersCollectionButton: numbersCollection_button,
    symbolsCollectionButton: symbolsCollection_button,
    commonKeywordsCollectionButton: commonKeywordsCollection_button,
    commonOperatorsCollectionButton: commonOperatorsCollection_button,
    cKeywordsCollectionButton: cKeywordsCollection_button,
    cOperatorsCollectionButton: cOperatorsCollection_button,
    cppKeywordsCollectionButton: cppKeywordsCollection_button,
    cppOperatorsCollectionButton: cppOperatorsCollection_button,
    csharpKeywordsCollectionButton: csharpKeywordsCollection_button,
    csharpOperatorsCollectionButton: csharpOperatorsCollection_button,
    css3PropertiesCollectionButton: css3PropertiesCollection_button,
    html5TagsCollectionButton: html5TagsCollection_button,
    javaKeywordsCollectionButton: javaKeywordsCollection_button,
    javaOperatorsCollectionButton: javaOperatorsCollection_button,
    javascriptKeywordsCollectionButton: javascriptKeywordsCollection_button,
    javascriptOperatorsCollectionButton: javascriptOperatorsCollection_button,
    pythonKeywordsCollectionButton: pythonKeywordsCollection_button,
    pythonOperatorsCollectionButton: pythonOperatorsCollection_button,
    allPhraseItemCollectionButtons: phraseItemCollection_buttons
  }
);

const gameStatisticsTable = new GameStatisticsTable(
  elements = {
    table: gameStatistics_table,
    toggleVisibilityButton: toggleVisibilityGameStatisticsTable_button,
    wpmCell: wpm_td,
    accuracyCell: accuracy_td,
    textLengthCell: textLength_td,
    timeElapsedCell: timeElapsed_td,
  }
);

const mistakeAnalyzer = new MistakeAnalyzer(
  elements = {
    container: mistakeAnalyzer_div,
    toggleVisibilityButton: toggleVisibilityMistakeAnalyzer_button,
    analyzedExpression: analyzedExpression_div,
    characterAnalysis: characterAnalysis_div
  }
);

function main() {
  initializePage();
  GameDirector.awaitGameRun();
  pageLoader.removeOverlay();
  delete pageLoader;
}

function initializePage() {
  navbar.addToggleItemsListVisibilityButtonClickEventListener();
  Settings.initializeAllValuesFromStorage();
  settingsMenu.initializeAllElementStatesBasedOnSettingValues();
  applyStoredVisibilitySettingsForAllCollapsibleElements();
  addButtonClickEventListenersForAllElementVisibilityTogglers();
  settingsMenu.addAllElementEventListeners();
  Sound.setVolume(Settings.soundVolume);
  keyboardVisual.initializeElementVisibilityState();
  keyboardVisual.addAllEventListeners();
  createTooltips();
}

function applyStoredVisibilitySettingsForAllCollapsibleElements() {
  ElementVisibility.applyStoredVisibilitySettings(
    args = {
      collapsibleElement: settingsMenu.containerElement,
      collapsibleElementId: SettingsMenu.ELEMENT_ID,
      toggleVisibilityButtonElement: settingsMenu.toggleVisibilityButtonElement,
      defaultVisibilityBool: SettingsMenu.DEFAULT_IS_VISIBLE_BOOL,
    }
  );
  ElementVisibility.applyStoredVisibilitySettings(
    args = {
      collapsibleElement: gameStatisticsTable.tableElement,
      collapsibleElementId: GameStatisticsTable.ELEMENT_ID,
      toggleVisibilityButtonElement: gameStatisticsTable.toggleVisibilityButtonElement,
      defaultVisibilityBool: GameStatisticsTable.DEFAULT_IS_VISIBLE_BOOL
    }
  );

  ElementVisibility.applyStoredVisibilitySettings(
    args = {
      collapsibleElement: mistakeAnalyzer.containerElement,
      collapsibleElementId: MistakeAnalyzer.ELEMENT_ID,
      toggleVisibilityButtonElement: mistakeAnalyzer.toggleVisibilityButtonElement,
      defaultVisibilityBool: MistakeAnalyzer.DEFAULT_IS_VISIBLE_BOOL
    }
  );
}

function addButtonClickEventListenersForAllElementVisibilityTogglers() {
  ElementVisibility.addToggleButtonClickEventListener(
    args = {
      collapsibleElement: settingsMenu.containerElement,
      collapsibleElementId: SettingsMenu.ELEMENT_ID,
      toggleVisibilityButtonElement: toggleVisibilitySettingsMenu_button
    }
  );
  ElementVisibility.addToggleButtonClickEventListener(
    args = {
      collapsibleElement: gameStatisticsTable.tableElement,
      collapsibleElementId: GameStatisticsTable.ELEMENT_ID,
      toggleVisibilityButtonElement: toggleVisibilityGameStatisticsTable_button
    }
  );
  ElementVisibility.addToggleButtonClickEventListener(
    args = {
      collapsibleElement: mistakeAnalyzer.containerElement,
      collapsibleElementId: MistakeAnalyzer.ELEMENT_ID,
      toggleVisibilityButtonElement: toggleVisibilityMistakeAnalyzer_button
    }
  );
}

function createTooltips() {
  //const gameWpmTrackerTooltip =
  new Tooltip(
    gameWpmTrackerTooltipIcon_div,
    tooltipText.gameWpmTracker.title,
    tooltipText.gameWpmTracker.body
  );

  /* Settings menu */
  //const expressionModeTooltip =
  new Tooltip(
    expressionModeTooltipIcon_div,
    tooltipText.expressionMode.title,
    tooltipText.expressionMode.body
  );
  //const instantDeathTooltip =
  new Tooltip(
    instantDeathTooltipIcon_div,
    tooltipText.instantDeath.title,
    tooltipText.instantDeath.body
  );
  //const keyboardVisualTooltip =
  new Tooltip(
    keyboardVisualTooltipIcon_div,
    tooltipText.keyboardVisual.title,
    tooltipText.keyboardVisual.body
  );
  //const punctuationTooltip =
  new Tooltip(
    punctuationTooltipIcon_div,
    tooltipText.punctuation.title,
    tooltipText.punctuation.body
  );
  //const trackStatisticsTooltip =
  new Tooltip(
    trackStatisticsTooltipIcon_div,
    tooltipText.trackStatistics.title,
    tooltipText.trackStatistics.body
  );
  //const phraseItemCollectionsTooltip =
  new Tooltip(
    phraseItemCollectionsTooltipIcon_div,
    tooltipText.phraseItemCollections.title,
    tooltipText.phraseItemCollections.body
  );

  /* Game statistics table */
  //const wordsPerMinuteTooltip =
  new Tooltip(
    wpmTooltipIcon_div,
    tooltipText.wordsPerMinute.title,
    tooltipText.wordsPerMinute.body
  );
  //const accuracyTooltip =
  new Tooltip(
    accuracyTooltipIcon_div,
    tooltipText.accuracyPercentage.title,
    tooltipText.accuracyPercentage.body
  );
}

main();