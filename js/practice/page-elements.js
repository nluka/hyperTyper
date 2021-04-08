const loader_img = document.getElementById("loaderImg");
const loaderOverlay_div = document.getElementById("loaderOverlayDiv");

// <game-area>
const gameArea_section = document.getElementById("gameSection");

const gameTimer_div = document.getElementById("gameTimerDiv");

const gameWpmTracker_div = document.getElementById("gameWpmTrackerDiv");
const gameWpmTrackerTooltipIcon_div = document.getElementById("gameWpmTrackerTooltipIconDiv");

const gameAction_button = document.getElementById("gameActionButton");

const expression_div = document.getElementById("expressionDiv");

const game_input = document.getElementById("gameInput");

const keyboardVisual_div = document.getElementById("keyboardVisualDiv");
const backquoteKey_div = document.getElementById("backquoteKeyDiv");
const digit1Key_div = document.getElementById("digit1KeyDiv");
const digit2Key_div = document.getElementById("digit2KeyDiv");
const digit3Key_div = document.getElementById("digit3KeyDiv");
const digit4Key_div = document.getElementById("digit4KeyDiv");
const digit5Key_div = document.getElementById("digit5KeyDiv");
const digit6Key_div = document.getElementById("digit6KeyDiv");
const digit7Key_div = document.getElementById("digit7KeyDiv");
const digit8Key_div = document.getElementById("digit8KeyDiv");
const digit9Key_div = document.getElementById("digit9KeyDiv");
const digit0Key_div = document.getElementById("digit0KeyDiv");
const minusKey_div = document.getElementById("minusKeyDiv");
const equalKey_div = document.getElementById("equalKeyDiv");
const backspaceKey_div = document.getElementById("backspaceKeyDiv");
const tabKey_div = document.getElementById("tabKeyDiv");
const qKey_div = document.getElementById("qKeyDiv");
const wKey_div = document.getElementById("wKeyDiv");
const eKey_div = document.getElementById("eKeyDiv");
const rKey_div = document.getElementById("rKeyDiv");
const tKey_div = document.getElementById("tKeyDiv");
const yKey_div = document.getElementById("yKeyDiv");
const uKey_div = document.getElementById("uKeyDiv");
const iKey_div = document.getElementById("iKeyDiv");
const oKey_div = document.getElementById("oKeyDiv");
const pKey_div = document.getElementById("pKeyDiv");
const bracketLeftKey_div = document.getElementById("bracketLeftKeyDiv");
const bracketRightKey_div = document.getElementById("bracketRightKeyDiv");
const backslashKey_div = document.getElementById("backslashKeyDiv");
const capsLockKey_div = document.getElementById("capsLockKeyDiv");
const aKey_div = document.getElementById("aKeyDiv");
const sKey_div = document.getElementById("sKeyDiv");
const dKey_div = document.getElementById("dKeyDiv");
const fKey_div = document.getElementById("fKeyDiv");
const gKey_div = document.getElementById("gKeyDiv");
const hKey_div = document.getElementById("hKeyDiv");
const jKey_div = document.getElementById("jKeyDiv");
const kKey_div = document.getElementById("kKeyDiv");
const lKey_div = document.getElementById("lKeyDiv");
const semicolonKey_div = document.getElementById("semicolonKeyDiv");
const quoteKey_div = document.getElementById("quoteKeyDiv");
const enterKey_div = document.getElementById("enterKeyDiv");
const shiftLeftKey_div = document.getElementById("shiftLeftKeyDiv");
const zKey_div = document.getElementById("zKeyDiv");
const xKey_div = document.getElementById("xKeyDiv");
const cKey_div = document.getElementById("cKeyDiv");
const vKey_div = document.getElementById("vKeyDiv");
const bKey_div = document.getElementById("bKeyDiv");
const nKey_div = document.getElementById("nKeyDiv");
const mKey_div = document.getElementById("mKeyDiv");
const commaKey_div = document.getElementById("commaKeyDiv");
const periodKey_div = document.getElementById("periodKeyDiv");
const slashKey_div = document.getElementById("slashKeyDiv");
const shiftRightKey_div = document.getElementById("shiftRightKeyDiv");
const controlLeftKey_div = document.getElementById("controlLeftKeyDiv");
const altLeftKey_div = document.getElementById("altLeftKeyDiv");
const spaceKey_div = document.getElementById("spaceKeyDiv");
const altRightKey_div = document.getElementById("altRightKeyDiv");
const controlRightKey_div = document.getElementById("controlRightKeyDiv");
// </game-area>

// <settings>
const settingsMenu_div = document.getElementById("settingsMenuDiv");
const toggleVisibilitySettingsMenu_button = document.getElementById("toggleVisibilitySettingsMenuButton");

const countdown_checkbox = document.getElementById("countdownCheckbox");

const expressionModeTooltipIcon_div = document.getElementById("expressionModeTooltipIconDiv");
const expressionMode_select = document.getElementById("expressionModeSelect");

const instantDeathTooltipIcon_div = document.getElementById("instantDeathTooltipIconDiv");
const instantDeath_checkbox = document.getElementById("instantDeathCheckbox");

const keyboardVisualTooltipIcon_div = document.getElementById("keyboardVisualTooltipIconDiv");
const keyboardVisual_checkbox = document.getElementById("keyboardVisualCheckbox");

const punctuationTooltipIcon_div = document.getElementById("punctuationTooltipIconDiv");
const punctuation_checkbox = document.getElementById("punctuationCheckbox");

const trackStatisticsTooltipIcon_div = document.getElementById("trackStatisticsTooltipIconDiv");
const trackStatistics_checkbox = document.getElementById("trackStatisticsCheckbox");

const soundEffects_checkbox = document.getElementById("soundEffectsCheckbox");

const soundVolume_range = document.getElementById("soundVolumeRange");

const phraseSettingsContainer_div = document.getElementById("phraseSettingsContainerDiv");

const phraseItemsNumber_input = document.getElementById("phraseItemsNumberInput");

const phraseItemCollectionsTooltipIcon_div = document.getElementById("phraseItemCollectionsTooltipIconDiv");

const englishWordsCommonCollection_button = document.getElementById("englishWordsCommonCollectionButton");
const englishWordsRandomCollection_button = document.getElementById("englishWordsRandomCollectionButton");

const numbersCollection_button = document.getElementById("numbersCollectionButton");
const symbolsCollection_button = document.getElementById("symbolsCollectionButton");

const commonKeywordsCollection_button = document.getElementById("commonKeywordsCollectionButton");
const commonOperatorsCollection_button = document.getElementById("commonOperatorsCollectionButton");

const cKeywordsCollection_button = document.getElementById("cKeywordsCollectionButton");
const cOperatorsCollection_button = document.getElementById("cOperatorsCollectionButton");

const cppKeywordsCollection_button = document.getElementById("cppKeywordsCollectionButton");
const cppOperatorsCollection_button = document.getElementById("cppOperatorsCollectionButton");

const csharpKeywordsCollection_button = document.getElementById("csharpKeywordsCollectionButton");
const csharpOperatorsCollection_button = document.getElementById("csharpOperatorsCollectionButton");

const css3PropertiesCollection_button = document.getElementById("css3PropertiesCollectionButton");
const html5TagsCollection_button = document.getElementById("html5TagsCollectionButton");

const javaKeywordsCollection_button = document.getElementById("javaKeywordsCollectionButton");
const javaOperatorsCollection_button = document.getElementById("javaOperatorsCollectionButton");

const javascriptKeywordsCollection_button = document.getElementById("javascriptKeywordsCollectionButton");
const javascriptOperatorsCollection_button = document.getElementById("javascriptOperatorsCollectionButton");

const pythonKeywordsCollection_button = document.getElementById("pythonKeywordsCollectionButton");
const pythonOperatorsCollection_button = document.getElementById("pythonOperatorsCollectionButton");

const phraseItemCollection_buttons = document.querySelectorAll(".phrase-item-collection-button");
// </settings>

// <game-statistics>
const toggleVisibilityGameStatisticsTable_button = document.getElementById("toggleVisibilityGameStatisticsTableButton");

const gameStatistics_table = document.getElementById("gameStatisticsTable");

const wpmTooltipIcon_div = document.getElementById("wpmTooltipIconDiv");
const wpm_td = document.getElementById("wpmTableData");

const accuracyTooltipIcon_div = document.getElementById("accuracyTooltipIconDiv");
const accuracy_td = document.getElementById("accuracyTableData");

const textLength_td = document.getElementById("textLengthCharsTableData");

const timeElapsed_td = document.getElementById("timeElapsedTableData");
// </game-statistics>

// <mistake-analysis>
const toggleVisibilityMistakeAnalyzer_button = document.getElementById("toggleVisibilityMistakeAnalyzerButton");
const mistakeAnalyzer_div = document.getElementById("mistakeAnalyzerDiv");
const analyzedExpression_div = document.getElementById("analyzedExpressionDiv");
const characterAnalysis_div = document.getElementById("characterAnalysisDiv");
// </mistake-analysis>