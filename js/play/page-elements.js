const _body = document.documentElement;

// <navbar>
const navbarItems_ul = document.getElementById("navbarItemsList");
const siteName_div = document.getElementById("siteNameDiv");
const siteNameDivChildren_spans = document.querySelectorAll(
  "#siteNameDiv span"
);
const siteName_elements = [siteName_div, siteNameDivChildren_spans];
const expandNavbarItemsButton_div = document.getElementById(
  "expandNavbarItemsButton"
);
const expandNavbarItemsButtonStrips_spans = document.getElementsByClassName(
  "expand-navbar-items-button-strip"
);
// </navbar>

// <game-area>
const gameArea_section = document.getElementById("gameSection");

const gameTimer_div = document.getElementById("gameTimer");
const gameStartAndAbort_button = document.getElementById("gameActionButton");
const dynamicWpmDisplay_div = document.getElementById("dynamicWpmDisplay");

const expression_div = document.getElementById("expressionDiv");

const playerText_input = document.getElementById("playerTextInput");

const visualKeyboard_div = document.getElementById("visualKeyboardDiv");
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
const toggleViewSettings_button = document.getElementById(
  "toggleViewSettingsButton"
);

const punctuation_checkbox = document.getElementById("punctuationCheckbox");
const visualKeyboard_checkbox = document.getElementById(
  "visualKeyboardCheckbox"
);
const suddenDeath_checkbox = document.getElementById("suddenDeathCheckbox");
const trackStatistics_checkbox = document.getElementById(
  "trackStatisticsCheckbox"
);
const countdown_checkbox = document.getElementById("countdownCheckbox");
const soundEnable_checkbox = document.getElementById("soundEnableSwitch");
const soundVolume_range = document.getElementById("soundVolumeRange");

const quoteModeEnable_button = document.getElementById("quoteModeEnableButton");
const phraseModeEnable_button = document.getElementById(
  "phraseModeEnableButton"
);

const phraseItemsNumber_input = document.getElementById(
  "phraseItemsNumberInput"
);

const commonEnglishWordsListToggle_button = document.getElementById(
  "commonEnglishWordsListToggleButton"
);
const randomEnglishWordsListToggle_button = document.getElementById(
  "randomEnglishWordsListToggleButton"
);
const numbersListToggle_button = document.getElementById(
  "numbersListToggleButton"
);
const symbolsListToggle_button = document.getElementById(
  "symbolsListToggleButton"
);
const commonProgrammingKeywordsListToggle_button = document.getElementById(
  "commonProgrammingKeywordsListToggleButton"
);
const commonProgrammingOperatorsListToggle_button = document.getElementById(
  "commonProgrammingOperatorsListToggleButton"
);

const phraseListToggle_buttons = document.querySelectorAll(
  ".phrase-list-toggle-button"
);
// </settings>

// <game-statistics>
const toggleViewGameStatistics_button = document.getElementById(
  "toggleViewGameStatisticsButton"
);

const gameStatistics_table = document.getElementById("gameStatisticsTable");
const wpm_td = document.getElementById("wpmTableData");
const accuracy_td = document.getElementById("accuracyTableData");
const textLength_td = document.getElementById("textLengthCharsTableData");
const timeElapsed_td = document.getElementById("timeElapsedTableData");
// </game-statistics>

// <mistake-analysis>
const toggleViewMistakeAnalysis_button = document.getElementById(
  "toggleViewMistakeAnalysisButton"
);
const analyzedExpression_div = document.getElementById("analyzedExpressionDiv");
// </mistake-analysis>
