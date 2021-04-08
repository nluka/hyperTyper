class SettingsMenu {
  static ELEMENT_ID = "settingsMenu";
  static DEFAULT_IS_VISIBLE_BOOL = false;

  static phraseItemCollectionNameToButtonElementMap = {
    "englishWordsCommonCollection": englishWordsCommonCollection_button,
    "englishWordsRandomCollection": englishWordsRandomCollection_button,
    "numbersCollection": numbersCollection_button,
    "symbolsCollection": symbolsCollection_button,
    "programmingCommonKeywordsCollection": commonKeywordsCollection_button,
    "programmingCommonOperatorsCollection": commonOperatorsCollection_button,
    "cKeywordsCollection": cKeywordsCollection_button,
    "cOperatorsCollection": cOperatorsCollection_button,
    "cppKeywordsCollection": cppKeywordsCollection_button,
    "cppOperatorsCollection": cppOperatorsCollection_button,
    "csharpKeywordsCollection": csharpKeywordsCollection_button,
    "csharpOperatorsCollection": csharpOperatorsCollection_button,
    "css3PropertiesCollection": css3PropertiesCollection_button,
    "html5TagsCollection": html5TagsCollection_button,
    "javaKeywordsCollection": javaKeywordsCollection_button,
    "javaOperatorsCollection": javaOperatorsCollection_button,
    "javascriptKeywordsCollection": javascriptKeywordsCollection_button,
    "javascriptOperatorsCollection": javascriptOperatorsCollection_button,
    "pythonKeywordsCollection": pythonKeywordsCollection_button,
    "pythonOperatorsCollection": pythonOperatorsCollection_button
  };

  static programmingRelatedPhraseItemCollectionNames = [
    "programmingCommonKeywordsCollection",
    "programmingCommonOperatorsCollection",
    "cKeywordsCollection",
    "cOperatorsCollection",
    "cppKeywordsCollection",
    "cppOperatorsCollection",
    "csharpKeywordsCollection",
    "csharpOperatorsCollection",
    "css3PropertiesCollection",
    "html5TagsCollection",
    "javaKeywordsCollection",
    "javaOperatorsCollection",
    "javascriptKeywordsCollection",
    "javascriptOperatorsCollection",
    "pythonKeywordsCollection",
    "pythonOperatorsCollection"
  ];

  constructor(
    elements = {
      menuContainer,
      toggleVisibilityButton,

      countdownCheckbox,
      expressionModeSelect,
      instantDeathCheckbox,
      keyboardVisualCheckbox,
      punctuationCheckbox,
      trackStatisticsCheckbox,

      soundEffectsCheckbox,
      soundVolumeRange,

      phraseContainer,
      phraseItemsNumberInput,
      englishWordsCommonCollectionButton,
      englishWordsRandomCollectionButton,
      numbersCollectionButton,
      symbolsCollectionButton,
      commonKeywordsCollectionButton,
      commonOperatorsCollectionButton,
      cKeywordsCollectionButton,
      cOperatorsCollectionButton,
      cppKeywordsCollectionButton,
      cppOperatorsCollectionButton,
      csharpKeywordsCollectionButton,
      csharpOperatorsCollectionButton,
      css3PropertiesCollectionButton,
      html5TagsCollectionButton,
      javaKeywordsCollectionButton,
      javaOperatorsCollectionButton,
      javascriptKeywordsCollectionButton,
      javascriptOperatorsCollectionButton,
      pythonKeywordsCollectionButton,
      pythonOperatorsCollectionButton,
      allPhraseItemCollectionButtons
    }
  ) {
    this.containerElement = elements.menuContainer;
    this.toggleVisibilityButtonElement = elements.toggleVisibilityButton;

    this.countdownCheckboxElement = elements.countdownCheckbox;
    this.expressionModeSelectElement = elements.expressionModeSelect;
    this.instantDeathCheckboxElement = elements.instantDeathCheckbox;
    this.keyboardVisualCheckboxElement = elements.keyboardVisualCheckbox;
    this.punctuationCheckboxElement = elements.punctuationCheckbox;
    this.trackStatisticsCheckboxElement = elements.trackStatisticsCheckbox;

    this.soundEffectsCheckboxElement = elements.soundEffectsCheckbox;
    this.soundVolumeRangeElement = elements.soundVolumeRange;

    this.phraseContainerElement = elements.phraseContainer;
    this.phraseItemCountInputElement = elements.phraseItemsNumberInput;
    this.englishWordsCommonCollectionButtonElement = elements.englishWordsCommonCollectionButton;
    this.englishWordsRandomCollectionButtonElement = elements.englishWordsRandomCollectionButton;
    this.numbersCollectionButtonElement = elements.numbersCollectionButton;
    this.symbolsCollectionButtonElement = elements.symbolsCollectionButton;
    this.commonKeywordsCollectionButtonElement = elements.commonKeywordsCollectionButton;
    this.commonOperatorsCollectionButtonElement = elements.commonOperatorsCollectionButton;
    this.cKeywordsCollectionButtonElement = elements.cKeywordsCollectionButton;
    this.cOperatorsCollectionButtonElement = elements.cOperatorsCollectionButton;
    this.cppKeywordsCollectionButtonElement = elements.cppKeywordsCollectionButton;
    this.cppOperatorsCollectionButtonElement = elements.cppOperatorsCollectionButton;
    this.csharpKeywordsCollectionButtonElement = elements.csharpKeywordsCollectionButton;
    this.csharpOperatorsCollectionButtonElement = elements.csharpOperatorsCollectionButton;
    this.css3PropertiesCollectionButtonElement = elements.css3PropertiesCollectionButton;
    this.html5TagsCollectionButtonElement = elements.html5TagsCollectionButton;
    this.javaKeywordsCollectionButtonElement = elements.javaKeywordsCollectionButton;
    this.javaOperatorsCollectionButtonElement = elements.javaOperatorsCollectionButton;
    this.javascriptKeywordsCollectionButtonElement = elements.javascriptKeywordsCollectionButton;
    this.javascriptOperatorsCollectionButtonElement = elements.javascriptOperatorsCollectionButton;
    this.pythonKeywordsCollectionButtonElement = elements.pythonKeywordsCollectionButton;
    this.pythonOperatorsCollectionButtonElement = elements.pythonOperatorsCollectionButton;
    this.allPhraseItemCollectionButtonElements = elements.allPhraseItemCollectionButtons;

    this.hasPunctuationBeenChangedByUser = false;
  }

  //#region Element state initialization methods

  initializeAllElementStatesBasedOnSettingValues() {
    this.initializeCountdownCheckboxElementState();
    this.initializeExpressionModeSelectElementState();
    this.initializeInstantDeathCheckboxElementState();
    this.initializeKeyboardVisualCheckboxElementState();
    this.initializePunctuationCheckboxElementState();
    this.initializeTrackStatisticsCheckboxElementState();

    this.initializeSoundEffectsCheckboxElementState();
    this.initializeSoundVolumeElementState();

    this.initializePhraseContainerElementState();
    this.initializePhraseItemCountInputElementState();
    this.initializeAllPhraseItemCollectionButtonElementStates();
  }

  //#region Initialize checkbox element state methods

  initializeCheckboxElementState(checkboxElement, settingKey) {
    this.setCheckboxElementValue(checkboxElement, Settings[settingKey]);
  }

  initializePunctuationCheckboxElementState() {
    this.initializeCheckboxElementState(this.punctuationCheckboxElement, Settings.KEYS.PUNCTUATION);
  }

  initializeKeyboardVisualCheckboxElementState() {
    this.initializeCheckboxElementState(this.keyboardVisualCheckboxElement, Settings.KEYS.KEYBOARD_VISUAL);
  }

  initializeInstantDeathCheckboxElementState() {
    this.initializeCheckboxElementState(this.instantDeathCheckboxElement, Settings.KEYS.INSTANT_DEATH);
  }

  initializeTrackStatisticsCheckboxElementState() {
    this.initializeCheckboxElementState(this.trackStatisticsCheckboxElement, Settings.KEYS.TRACK_STATISTICS);
  }

  initializeCountdownCheckboxElementState() {
    this.initializeCheckboxElementState(this.countdownCheckboxElement, Settings.KEYS.COUNTDOWN);
  }

  initializeSoundEffectsCheckboxElementState() {
    this.initializeCheckboxElementState(this.soundEffectsCheckboxElement, Settings.KEYS.SOUND_EFFECTS);
  }

  //#endregion

  //#region Initialize select element state methods

  initializeSelectElementState(selectElement, settingKey) {
    this.setSelectElementValue(selectElement, Settings[settingKey]);
  }

  setSelectElementValue(selectElement, value) {
    selectElement.value = value;
  }

  initializeExpressionModeSelectElementState() {
    this.initializeSelectElementState(this.expressionModeSelectElement, Settings.KEYS.EXPRESSION_MODE);
  }

  //#endregion

  //#region Initialize range element state methods

  initializeSoundVolumeElementState() {
    this.setRangeElementValue(this.soundVolumeRangeElement, Settings.soundVolume * 100);
    if (!Settings.soundEffects) {
      const soundVolumeLabelElement = this.getLabelElementForSoundVolumeRange();
      this.disableElement(soundVolumeLabelElement);
      this.disableElement(this.soundVolumeRangeElement);
    }
  }

  getLabelElementForSoundVolumeRange() {
    return document.querySelector("label[for='soundVolumeRange']");
  }

  setRangeElementValue(rangeElement, value) {
    Settings.verifyNumberIsInRange(
      value,
      {
        min: rangeElement.getAttribute("min"),
        max: rangeElement.getAttribute("max")
      }
    );
    rangeElement.value = value;
  }

  //#endregion

  initializePhraseContainerElementState() {
    if (Settings.expressionMode === Settings.EXPRESSION_MODES.QUOTE) {
      this.disableAllPhraseSettingElements();
    }
  }

  //#region Initialize number input element state methods

  initializePhraseItemCountInputElementState() {
    if (Settings.expressionMode === Settings.EXPRESSION_MODES.PHRASE) {
      this.enableElement(this.phraseItemCountInputElement);
    }
    this.setNumberInputValue(this.phraseItemCountInputElement, Settings.phraseItemCount);
  }

  setNumberInputValue(inputElement, number) {
    inputElement.value = number;
  }

  //#endregion

  //#region Initialize button element state methods

  initializeAllPhraseItemCollectionButtonElementStates() {
    if (Settings.expressionMode === Settings.EXPRESSION_MODES.PHRASE) {
      this.allPhraseItemCollectionButtonElements.forEach((buttonElement) => {
        this.enableElement(buttonElement);
      });
    }
    this.activateSelectedPhraseItemCollectionButtons();
  }

  activateSelectedPhraseItemCollectionButtons() {
    const stringifiedPhraseItemCollectionNames = localStorage.getItem(Settings.KEYS.PHRASE_ITEM_COLLECTIONS);
    if (stringifiedPhraseItemCollectionNames === null) {
      this.activateDefaultPhraseItemCollectionButtons();
      return;
    }
    const storedItemCollectionNames = JSON.parse(stringifiedPhraseItemCollectionNames);
    storedItemCollectionNames.forEach((itemCollectionName) => {
      const correspondingButtonElement = SettingsMenu.phraseItemCollectionNameToButtonElementMap[itemCollectionName];
      this.activateButton(correspondingButtonElement);
    });
  }

  activateDefaultPhraseItemCollectionButtons() {
    const defaultPhraseItemCollectionNames = Settings.default.phraseItemCollectionNames;
    defaultPhraseItemCollectionNames.forEach((itemCollectionName) => {
      const correspondingButtonElement = SettingsMenu.phraseItemCollectionNameToButtonElementMap[itemCollectionName];
      this.activateButton(correspondingButtonElement);
    });
  }

  enableAllPhraseItemCollectionButtons() {
    this.allPhraseItemCollectionButtonElements.forEach((buttonElement) => {
      this.enableElement(buttonElement);
    });
  }

  //#endregion

  //#endregion

  //#region Element event listener methods

  addAllElementEventListeners() {
    this.addCountdownCheckboxEventListener();
    this.addExpressionModeSelectEventListener();
    this.addInstantDeathCheckboxEventListener();
    this.addKeyboardVisualCheckboxEventListener();
    this.addPunctuationCheckboxEventListener();
    this.addTrackStatisticsCheckboxEventListener();

    this.addSoundEffectsCheckboxEventListener();
    this.addSoundVolumeRangeEventListener();

    this.addPhraseItemCountInputEventListener();
    this.addAllPhraseItemCollectionButtonClickEventListeners();
  }

  //#region Gameplay elements event listener methods

  addCheckboxChangeEventListener(checkboxElement, settingKey) {
    checkboxElement.addEventListener("change", () => {
      Settings[settingKey] = !Settings[settingKey];
      SettingsStorage.set(settingKey, Settings[settingKey]);
    });
  };

  addCountdownCheckboxEventListener() {
    this.addCheckboxChangeEventListener(this.countdownCheckboxElement, Settings.KEYS.COUNTDOWN);
  }

  addExpressionModeSelectEventListener() {
    this.expressionModeSelectElement.addEventListener("change", () => {
      Settings.expressionMode = this.expressionModeSelectElement.value;
      SettingsStorage.set(Settings.KEYS.EXPRESSION_MODE, Settings.expressionMode);
      switch (Settings.expressionMode) {
        case Settings.EXPRESSION_MODES.QUOTE:
          this.disableAllPhraseSettingElements();
          //this.enableAllQuoteSettingElements();
          break;
        case Settings.EXPRESSION_MODES.PHRASE:
          //this.disableAllQuoteSettingElements();
          this.enableAllPhraseSettingElements();
          break;
      }
    });
  }

  disableAllPhraseSettingElements() {
    this.disableElement(this.phraseItemCountInputElement);
    this.allPhraseItemCollectionButtonElements.forEach((itemCollectionButtonElement) => {
      this.disableElement(itemCollectionButtonElement);
    });
    this.disableElement(this.phraseContainerElement);
    const labels = this.phraseContainerElement.querySelectorAll("label");
    labels.forEach((label) => {
      this.disableElement(label);
    });
  }

  disableElement(element) {
    element.setAttribute("disabled", true);
  }

  // enableAllQuoteSettingElements() {

  // }

  // disableAllQuoteSettingElements() {

  // }

  enableAllPhraseSettingElements() {
    this.enableElement(this.phraseItemCountInputElement);
    this.allPhraseItemCollectionButtonElements.forEach((itemCollectionButtonElement) => {
      this.enableElement(itemCollectionButtonElement);
    });
    this.enableElement(this.phraseContainerElement);
  }

  enableElement(element) {
    element.removeAttribute("disabled");
  }

  addInstantDeathCheckboxEventListener() {
    this.addCheckboxChangeEventListener(this.instantDeathCheckboxElement, Settings.KEYS.INSTANT_DEATH);
  }

  addKeyboardVisualCheckboxEventListener() {
    this.addCheckboxChangeEventListener(this.keyboardVisualCheckboxElement, Settings.KEYS.KEYBOARD_VISUAL);
    this.keyboardVisualCheckboxElement.addEventListener("change", () => {
      if (keyboardVisual.isVisible()) {
        keyboardVisual.hide();
        return;
      }
      keyboardVisual.show();
    });
  }

  addPunctuationCheckboxEventListener() {
    this.addCheckboxChangeEventListener(this.punctuationCheckboxElement, Settings.KEYS.PUNCTUATION);
  }

  addTrackStatisticsCheckboxEventListener() {
    this.addCheckboxChangeEventListener(this.trackStatisticsCheckboxElement, Settings.KEYS.TRACK_STATISTICS);
  }

  //#endregion

  //#region Audio elements event listener methods

  addSoundEffectsCheckboxEventListener() {
    this.addCheckboxChangeEventListener(this.soundEffectsCheckboxElement, Settings.KEYS.SOUND_EFFECTS);
    this.soundEffectsCheckboxElement.addEventListener("change", () => {
      const soundVolumeLabelElement = this.getLabelElementForSoundVolumeRange();
      if (this.isCheckboxElementChecked(this.soundEffectsCheckboxElement)) {
        this.enableElement(soundVolumeLabelElement);
        this.enableElement(this.soundVolumeRangeElement);
      } else {
        this.disableElement(soundVolumeLabelElement);
        this.disableElement(this.soundVolumeRangeElement);
      }
    });
  }

  isCheckboxElementChecked(checkboxElement) {
    return checkboxElement.checked;
  }

  addSoundVolumeRangeEventListener() {
    this.soundVolumeRangeElement.addEventListener("change", () => {
      const newVolume = this.soundVolumeRangeElement.value / 100;
      Settings.setSoundVolume(newVolume);
    });
  }

  //#endregion

  //#region Phrase elements event listener methods

  addPhraseItemCountInputEventListener() {
    this.phraseItemCountInputElement.addEventListener("input", () => {
      this.correctPhraseItemCountElementValueIfOutOfRange();
      Settings.setPhraseItemCount(this.getPhraseItemCountElementValue());
    });
  }

  correctPhraseItemCountElementValueIfOutOfRange() {
    const currentCount = this.getPhraseItemCountElementValue();
    if (currentCount < Settings.MIN_PHRASE_ITEM_COUNT) {
      this.setPhraseItemCountElementValue(Settings.MIN_PHRASE_ITEM_COUNT);
      return;
    }
    if (currentCount > Settings.MAX_PHRASE_ITEM_COUNT) {
      this.setPhraseItemCountElementValue(Settings.MAX_PHRASE_ITEM_COUNT);
    }
  }

  getPhraseItemCountElementValue() {
    return this.phraseItemCountInputElement.value;
  }

  setPhraseItemCountElementValue(number) {
    this.phraseItemCountInputElement.value = number;
  }

  addAllPhraseItemCollectionButtonClickEventListeners() {
    this.addEnglishWordsCommonCollectionButtonClickEventListener();
    this.addEnglishWordsRandomCollectionButtonClickEventListener();

    this.addNumbersCollectionButtonClickEventListener();
    this.addSymbolsCollectionButtonClickEventListener();

    this.addProgrammingCommonKeywordsCollectionButtonClickEventListener();
    this.addProgrammingCommonOperatorsCollectionButtonClickEventListener();

    this.addCKeywordsCollectionButtonClickEventListener();
    this.addCOperatorsCollectionButtonClickEventListener();

    this.addCppKeywordsCollectionButtonClickEventListener();
    this.addCppOperatorsCollectionButtonClickEventListener();

    this.addCsharpKeywordsCollectionButtonClickEventListener();
    this.addCsharpOperatorsCollectionButtonClickEventListener();

    this.addCss3PropertiesCollectionButtonClickEventListener();
    this.addHtml5TagsCollectionButtonClickEventListener();

    this.addJavaKeywordsCollectionButtonClickEventListener();
    this.addJavaOperatorsCollectionButtonClickEventListener();

    this.addJavascriptKeywordsCollectionButtonClickEventListener();
    this.addJavascriptOperatorsCollectionButtonClickEventListener();

    this.addPythonKeywordsCollectionButtonClickEventListener();
    this.addPythonOperatorsCollectionButtonClickEventListener();
  }

  addPhraseItemCollectionButtonClickEventListener(buttonElement, itemCollection) {
    buttonElement.addEventListener("click", () => {
      let newItemCollectionArray = Settings.phraseItemCollections;
      if (this.isButtonActive(buttonElement)) {
        this.spliceCollectionFromArray(itemCollection, newItemCollectionArray);
      } else {
        newItemCollectionArray.push(itemCollection);
      }
      Settings.setPhraseItemCollections(newItemCollectionArray);
      this.toggleButtonActiveAttribute(buttonElement);
      this.changePunctuationStateIfNecessary();
    });
  }

  isButtonActive(buttonElement) {
    return parseBool(buttonElement.getAttribute("data-active"));
  }

  spliceCollectionFromArray(itemCollectionToRemove, array) {
    const indexOfItemCollectionToRemove = array.indexOf(itemCollectionToRemove);
    array.splice(indexOfItemCollectionToRemove, 1);
  }

  toggleButtonActiveAttribute(buttonElement) {
    if (this.isButtonActive(buttonElement)) {
      this.deactivateButton(buttonElement);
      return;
    }
    this.activateButton(buttonElement);
  }

  deactivateButton(buttonElement) {
    buttonElement.setAttribute("data-active", false);
  }

  activateButton(buttonElement) {
    buttonElement.setAttribute("data-active", true);
  }

  changePunctuationStateIfNecessary() {
    if (this.areAnyProgrammingRelatedPhraseItemCollectionsSelected()) {
      this.turnOffPunctuationIfOn();
      return;
    }
    this.turnOnPunctuationIfOff();
  }

  areAnyProgrammingRelatedPhraseItemCollectionsSelected() {
    for (let i = 0; i < Settings.phraseItemCollections.length; i++) {
      const itemCollection = Settings.phraseItemCollections[i];
      const itemCollections = Object.values(phraseItemCollectionNameToArrayMap);
      const indexOfItemCollection = itemCollections.indexOf(itemCollection);
      const itemCollectionName = Object.keys(phraseItemCollectionNameToArrayMap)[indexOfItemCollection];
      if (SettingsMenu.programmingRelatedPhraseItemCollectionNames.includes(itemCollectionName)) {
        return true;
      }
    }
    return false;
  }

  turnOffPunctuationIfOn() {
    if ((!Settings.punctuation) && (!this.isCheckboxElementChecked(this.punctuationCheckboxElement))) {
      return;
    }
    Settings.punctuation = false;
    SettingsStorage.setPunctuation(false);
    this.setCheckboxElementValue(this.punctuationCheckboxElement, false);
  }

  turnOnPunctuationIfOff() {
    if ((Settings.punctuation) && (this.isCheckboxElementChecked(this.punctuationCheckboxElement))) {
      return;
    }
    Settings.punctuation = true;
    SettingsStorage.setPunctuation(true);
    this.setCheckboxElementValue(this.punctuationCheckboxElement, true);
  }

  setCheckboxElementValue(checkboxElement, isChecked) {
    checkboxElement.checked = isChecked;
  }

  addEnglishWordsCommonCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.englishWordsCommonCollectionButtonElement,
      englishWordsCommonCollection
    );
  }

  addEnglishWordsRandomCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.englishWordsRandomCollectionButtonElement,
      englishWordsRandomCollection,
    );
  }

  addNumbersCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.numbersCollectionButtonElement,
      numbersCollection
    );
  }

  addSymbolsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.symbolsCollectionButtonElement,
      symbolsCollection
    );
  }

  addProgrammingCommonKeywordsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.commonKeywordsCollectionButtonElement,
      programmingCommonKeywordsCollection
    );
  }

  addProgrammingCommonOperatorsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.commonOperatorsCollectionButtonElement,
      programmingCommonOperatorsCollection
    );
  }

  addCKeywordsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.cKeywordsCollectionButtonElement,
      cKeywordsCollection
    );
  }

  addCOperatorsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.cOperatorsCollectionButtonElement,
      cOperatorsCollection
    );
  }

  addCppKeywordsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.cppKeywordsCollectionButtonElement,
      cppKeywordsCollection
    );
  }

  addCppOperatorsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.cppOperatorsCollectionButtonElement,
      cppOperatorsCollection
    );
  }

  addCsharpKeywordsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.csharpKeywordsCollectionButtonElement,
      csharpKeywordsCollection
    );
  }

  addCsharpOperatorsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.csharpOperatorsCollectionButtonElement,
      csharpOperatorsCollection
    );
  }

  addCss3PropertiesCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.css3PropertiesCollectionButtonElement,
      css3PropertiesCollection
    );
  }

  addHtml5TagsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.html5TagsCollectionButtonElement,
      html5TagsCollection
    );
  }

  addJavaKeywordsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.javaKeywordsCollectionButtonElement,
      javaKeywordsCollection
    );
  }

  addJavaOperatorsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.javaOperatorsCollectionButtonElement,
      javaOperatorsCollection
    );
  }

  addJavascriptKeywordsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.javascriptKeywordsCollectionButtonElement,
      javascriptKeywordsCollection
    );
  }

  addJavascriptOperatorsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.javascriptOperatorsCollectionButtonElement,
      javascriptOperatorsCollection
    );
  }

  addPythonKeywordsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.pythonKeywordsCollectionButtonElement,
      pythonKeywordsCollection
    );
  }

  addPythonOperatorsCollectionButtonClickEventListener() {
    this.addPhraseItemCollectionButtonClickEventListener(
      this.pythonOperatorsCollectionButtonElement,
      pythonOperatorsCollection
    );
  }

  //#endregion

  //#endregion
}