const phraseItemCollectionNameToArrayMap = {
  "englishWordsCommonCollection": englishWordsCommonCollection,
  "englishWordsRandomCollection": englishWordsRandomCollection,
  "numbersCollection": numbersCollection,
  "symbolsCollection": symbolsCollection,
  "programmingCommonKeywordsCollection": programmingCommonKeywordsCollection,
  "programmingCommonOperatorsCollection": programmingCommonOperatorsCollection,
  "cKeywordsCollection": cKeywordsCollection,
  "cOperatorsCollection": cOperatorsCollection,
  "cppKeywordsCollection": cppKeywordsCollection,
  "cppOperatorsCollection": cppOperatorsCollection,
  "csharpKeywordsCollection": csharpKeywordsCollection,
  "csharpOperatorsCollection": csharpOperatorsCollection,
  "css3PropertiesCollection": css3PropertiesCollection,
  "html5TagsCollection": html5TagsCollection,
  "javaKeywordsCollection": javaKeywordsCollection,
  "javaOperatorsCollection": javaOperatorsCollection,
  "javascriptKeywordsCollection": javascriptKeywordsCollection,
  "javascriptOperatorsCollection": javascriptOperatorsCollection,
  "pythonKeywordsCollection": pythonKeywordsCollection,
  "pythonOperatorsCollection": pythonOperatorsCollection
};

class Settings {
  // Constants
  static MIN_SOUND_VOLUME = 0.01;
  static MAX_SOUND_VOLUME = 1.0;
  static EXPRESSION_MODES = {
    QUOTE: "quote",
    PHRASE: "phrase"
  };
  static MIN_PHRASE_ITEM_COUNT = 1;
  static MAX_PHRASE_ITEM_COUNT = 100;

  static default = {
    countdown: true,
    expressionMode: this.EXPRESSION_MODES.QUOTE,
    instantDeath: false,
    keyboardVisual: false,
    punctuation: true,
    trackStatistics: true,

    soundEffects: true,
    soundVolume: 0.5,

    phraseItemCount: 25,
    phrasePunctuationChancePerItem: 1/15,
    phraseItemCollections: [
      englishWordsCommonCollection,
      englishWordsRandomCollection,
      numbersCollection,
      symbolsCollection,
    ],
    phraseItemCollectionNames: [
      "englishWordsCommonCollection",
      "englishWordsRandomCollection",
      "numbersCollection",
      "symbolsCollection",
    ]
  };

  // Keys
  static KEYS = {
    COUNTDOWN: "countdown",
    EXPRESSION_MODE: "expressionMode",
    INSTANT_DEATH: "instantDeath",
    KEYBOARD_VISUAL: "keyboardVisual",
    PUNCTUATION: "punctuation",
    TRACK_STATISTICS: "trackStatistics",

    SOUND_EFFECTS: "soundEffects",
    SOUND_VOLUME: "soundVolume",

    PHRASE_ITEM_COUNT: "phraseItemCount",
    PHRASE_ITEM_COLLECTIONS: "phraseItemCollections"
  };

  // Gameplay
  static countdown = this.default.countdown;
  static expressionMode = this.default.expressionMode;
  static instantDeath = this.default.instantDeath;
  static keyboardVisual = this.default.keyboardVisual;
  static punctuation = this.default.punctuation;
  static trackStatistics = this.default.trackStatistics;

  // Audio
  static soundEffects = this.default.soundEffects;
  static soundVolume = this.default.soundVolume;

  // Phrase
  static phraseItemCount = this.default.phraseItemCount;
  static phrasePunctuationChancePerItem = this.default.phrasePunctuationChancePerItem;
  static phraseItemCollections = this.default.phraseItemCollections;

  //#region Setter methods

  static verifyEntityType(entity, dataType) {
    if (typeof entity !== dataType) {
      throw TypeError(`'${entity}' is not of type ${dataType}`);
    }
  }

  static verifyNumberIsInRange(number, range = { min, max }) {
    if (number < range.min || number > range.max) {
      throw `'${number}' is not in range ${range.min}-${range.max}`;
    }
  }

  static setPunctuation(bool) {
    this.verifyEntityType(bool, "boolean");
    this.punctuation = bool;
    SettingsStorage.setPunctuation(bool);
  }

  static setSoundVolume(float) {
    this.verifyEntityType(float, "number");
    this.verifyNumberIsInRange(
      float,
      {
        min: this.MIN_SOUND_VOLUME,
        max: this.MAX_SOUND_VOLUME
      }
    );
    this.soundVolume = float;
    Sound.setVolume(float);
    SettingsStorage.setSoundVolume(float);
  }

  static setExpressionMode(mode) {
    this.verifyEntityType(mode, "string");
    this.verifyExpressionMode(mode);
    this.expressionMode = mode;
    SettingsStorage.setExpressionMode(mode);
  }

  static verifyExpressionMode(mode) {
    if (mode !== this.EXPRESSION_MODES.QUOTE && mode !== this.EXPRESSION_MODES.PHRASE) {
      throw `'${mode}' is not a valid mode for expression`;
    }
  }

  static setPhraseItemCount(count) {
    this.verifyNumberIsInRange(
      count,
      {
        min: this.MIN_PHRASE_ITEM_COUNT,
        max: this.MAX_PHRASE_ITEM_COUNT
      }
    );
    this.phraseItemCount = count;
    SettingsStorage.setPhraseItemCount(count);
  }

  static setPhraseItemCollections(itemCollectionArray) {
    let newItemCollectionNamesArray = [];
    itemCollectionArray.forEach((itemCollection) => {
      const indexOfItemCollection = Object.values(phraseItemCollectionNameToArrayMap).indexOf(itemCollection);
      if (indexOfItemCollection > -1) {
        newItemCollectionNamesArray.push(Object.keys(phraseItemCollectionNameToArrayMap)[indexOfItemCollection]);
      }
    });
    SettingsStorage.setPhraseItemCollections(newItemCollectionNamesArray);
  }

  //#endregion

  //#region Initialize values from storage methods

  static initializeAllValuesFromStorage() {
    this.initializePunctuationStoredValue();
    this.initializeKeyboardVisualStoredValue();
    this.initializeInstantDeathStoredValue();
    this.initializeTrackStatisticsStoredValue();
    this.initializeCountdownStoredValue();
    this.initializeSoundEffectsStoredValue();
    this.initializeSoundVolumeStoredValue();
    this.initializeExpressionModeStoredValue();
    this.initializePhraseItemCountStoredValue();
    this.initializePhraseItemCollectionsStoredValue();
  }

  //#region Initialize data type value methods

  static initializeBoolValue(settingKey) {
    const storedBool = SettingsStorage.getBoolIfExists(settingKey);
    if (storedBool !== null) {
      Settings[settingKey] = storedBool;
    }
  }

  static initializeFloatValue(settingKey) {
    const storedFloat = SettingsStorage.getFloatIfExists(settingKey);
    if (storedFloat !== null) {
      Settings[settingKey] = storedFloat;
    }
  }

  static initializeStringValue(settingKey) {
    const storedString = SettingsStorage.getStringIfExists(settingKey);
    if (storedString !== null) {
      Settings[settingKey] = storedString;
    }
  }

  static initializeCountValue(settingKey) {
    const storedCount = SettingsStorage.getCountIfExists(settingKey);
    if (storedCount !== null) {
      Settings[settingKey] = storedCount;
    }
  }

  static initializeArrayValue(settingKey) {
    const storedArray = SettingsStorage.getArrayIfExists(settingKey);
    if (storedArray !== null) {
      const convertedArray = this.convertItemCollectionNameArrayToItemCollectionArray(storedArray);
      Settings[settingKey] = convertedArray;
    }
  }

  static convertItemCollectionNameArrayToItemCollectionArray(itemCollectionNameArray) {
    let itemCollectionArray = [];
    itemCollectionNameArray.forEach((itemCollectionName) => {
      itemCollectionArray.push(phraseItemCollectionNameToArrayMap[itemCollectionName]);
    });
    return itemCollectionArray;
  }

  //#endregion

  static initializePunctuationStoredValue() {
    this.initializeBoolValue(this.KEYS.PUNCTUATION);
  }

  static initializeKeyboardVisualStoredValue() {
    this.initializeBoolValue(this.KEYS.KEYBOARD_VISUAL);
  }

  static initializeInstantDeathStoredValue() {
    this.initializeBoolValue(this.KEYS.INSTANT_DEATH);
  }

  static initializeTrackStatisticsStoredValue() {
    this.initializeBoolValue(this.KEYS.TRACK_STATISTICS);
  }

  static initializeCountdownStoredValue() {
    this.initializeBoolValue(this.KEYS.COUNTDOWN);
  }

  static initializeSoundEffectsStoredValue() {
    this.initializeBoolValue(this.KEYS.SOUND_EFFECTS);
  }

  static initializeSoundVolumeStoredValue() {
    this.initializeFloatValue(this.KEYS.SOUND_VOLUME);
  }

  static initializeExpressionModeStoredValue() {
    this.initializeStringValue(this.KEYS.EXPRESSION_MODE);
  }

  static initializePhraseItemCountStoredValue() {
    this.initializeCountValue(this.KEYS.PHRASE_ITEM_COUNT);
  }

  static initializePhraseItemCollectionsStoredValue() {
    this.initializeArrayValue(this.KEYS.PHRASE_ITEM_COLLECTIONS);
  }

  //#endregion
}