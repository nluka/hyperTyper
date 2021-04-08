class Settings {
  constructor() {
    this.isPunctuationEnabled = defaultConfig.isPunctuationEnabled;
    this.isSuddenDeathEnabled = defaultConfig.isSuddenDeathEnabled;
    this.isResultTrackingEnabled = defaultConfig.isResultTrackingEnabled;
    this.isCountdownEnabled = defaultConfig.isCountdownEnabled;

    this.isSoundEnabled = defaultConfig.isSoundEnabled;
    this.soundVolume = defaultConfig.soundVolume;
    this.soundVolumeRangeValueBeforeDisabling =
      defaultConfig.soundVolumeRangeValueBeforeDisabling;

    this.expressionMode = defaultConfig.expressionMode;

    this.phraseItemsCount = defaultConfig.phraseItemsCount;
    this.phraseListsEnabledArr = defaultConfig.phraseListsEnabledArr;

    //console.log("Settings object insantiated, default settings loaded");
  }

  setSoundVolumeTo(float) {
    if (float <= 0) float = 0.01;
    else if (float > 1.0) float = 1.0;
    this.soundVolume = float;
    this.soundVolumeRangeValueBeforeDisabling = float;
    localStorage.setItem("soundVolume", `${float}`);
  }

  setExpressionModeTo(mode_str) {
    this.expressionMode = mode_str;
    localStorage.setItem("expressionMode", mode_str);
  }

  setPhraseItemsCountTo(int) {
    if (int < 1) int = 1;
    else if (int > 100) int = 100;
    this.phraseItemsCount = int;
    localStorage.setItem("phraseItemsCount", `${int}`);
  }

  setPhraseListsEnabledArrTo(parentArray) {
    let newArray = [];
    parentArray.forEach((childArray) => {
      const indexOfArray = Object.values(wordListNameToArrayMap).indexOf(
        childArray
      );
      if (indexOfArray > -1) {
        newArray.push(Object.keys(wordListNameToArrayMap)[indexOfArray]);
      }
    });
    localStorage.setItem("phraseListsEnabledArr", JSON.stringify(newArray));
  }

  loadAllSavedValuesFromLocalStorage() {
    // Gameplay
    this.retrieveAndSetStoredBoolValueForCheckbox(
      punctuation_checkbox,
      "isPunctuationEnabled"
    );
    const isVisualKeyboardEnabled =
    this.retrieveAndSetStoredBoolValueForCheckbox(
      visualKeyboard_checkbox,
      "isVisualKeyboardEnabled"
    );
    if (isVisualKeyboardEnabled && isVisualKeyboardEnabled != null) {
      visualKeyboard.show();
      visualKeyboard.addKeyEventListeners();
    }
    this.retrieveAndSetStoredBoolValueForCheckbox(
      suddenDeath_checkbox,
      "isSuddenDeathEnabled"
    );
    this.retrieveAndSetStoredBoolValueForCheckbox(
      trackStatistics_checkbox,
      "isResultTrackingEnabled"
    );
    this.retrieveAndSetStoredBoolValueForCheckbox(
      countdown_checkbox,
      "isCountdownEnabled"
    );

    // Audio
    this.retrieveAndSetStoredBoolValueForCheckbox(
      soundEnable_checkbox,
      "isSoundEnabled"
    );
    const storedSoundVolume_float = this.retrieveFloatValueOf("soundVolume");
    if (storedSoundVolume_float != null) {
      this.soundVolume = storedSoundVolume_float;
      this.soundVolumeRangeValueBeforeDisabling = this.soundVolume;
      soundVolume_range.value = storedSoundVolume_float * 100;
    }
    if (!this.isSoundEnabled) {
      soundVolume_range.value = 0;
      soundVolume_range.setAttribute("disabled", "true");
    }

    // Expression Mode
    const storedExpressionMode_str = localStorage.getItem("expressionMode");
    if (storedExpressionMode_str != null) {
      this.expressionMode = storedExpressionMode_str;
      if (this.expressionMode === "quote") {
        quoteModeEnable_button.classList.add("on");
        phraseModeEnable_button.classList.remove("on");
      } else {
        quoteModeEnable_button.classList.remove("on");
        phraseModeEnable_button.classList.add("on");
      }
    }

    // Phrase
    const storedPhraseItems_int = this.retrieveCountValueOf("phraseItemsCount");
    if (storedPhraseItems_int != null) {
      this.phraseItemsCount = storedPhraseItems_int;
      phraseItemsNumber_input.value = storedPhraseItems_int;
    }
    if (this.expressionMode === "phrase") {
      phraseItemsNumber_input.toggleAttribute("disabled");
    }

    const storedPhraseListsEnabledArr_str = localStorage.getItem(
      "phraseListsEnabledArr"
    );
    if (storedPhraseListsEnabledArr_str != null) {
      this.phraseListsEnabledArr = [];
      phraseListToggle_buttons.forEach((button) => {
        button.classList.remove("on");
        if (this.expressionMode === "phrase")
          button.removeAttribute("disabled");
      });
      const storedPhraseListsEnabledArr = JSON.parse(
        storedPhraseListsEnabledArr_str
      );
      storedPhraseListsEnabledArr.forEach((childArrayName) => {
        this.phraseListsEnabledArr.push(
          wordListNameToArrayMap[childArrayName]
        );
        wordListNameToButtonElementMap[childArrayName].classList.add("on");
      });
    }
  }

  retrieveAndSetStoredBoolValueForCheckbox(checkbox_element, key_str) {
    const value_str = localStorage.getItem(key_str);
    if (value_str == null) return null;
    const value_bool = parseBool(value_str);
    settings[key_str] = value_bool;
    checkbox_element.checked = value_bool;
    return value_bool;
  }

  retrieveFloatValueOf(key_str) {
    const value_str = localStorage.getItem(key_str);
    if (value_str != null) {
      return parseFloat(value_str);
    }
    return null;
  }

  retrieveCountValueOf(key_str) {
    const value_str = localStorage.getItem(key_str);
    if (value_str != null) {
      return parseInt(value_str);
    }
    return null;
  }
}

const defaultConfig = {
  isPunctuationEnabled: true,
  isSuddenDeathEnabled: false,
  isResultTrackingEnabled: true,
  isCountdownEnabled: true,

  isSoundEnabled: true,
  soundVolume: 0.5,
  soundVolumeRangeValueBeforeDisabling: 0.5,

  expressionMode: "quote",

  phraseItemsCount: 25,
  phraseListsEnabledArr: [
    commonEnglishWordsList,
    randomEnglishWordsList,
    numbersList,
    symbolsList,
  ],
};

const wordListNameToArrayMap = {
  commonEnglishWordsList: commonEnglishWordsList,
  randomEnglishWordsList: randomEnglishWordsList,
  numbersList: numbersList,
  symbolsList: symbolsList,
  commonProgrammingKeywordsList: commonProgrammingKeywordsList,
  commonProgrammingOperatorsList: commonProgrammingOperatorsList,
};

const wordListNameToButtonElementMap = {
  commonEnglishWordsList: commonEnglishWordsListToggle_button,
  randomEnglishWordsList: randomEnglishWordsListToggle_button,
  numbersList: numbersListToggle_button,
  symbolsList: symbolsListToggle_button,
  commonProgrammingKeywordsList: commonProgrammingKeywordsListToggle_button,
  commonProgrammingOperatorsList: commonProgrammingOperatorsListToggle_button,
};
