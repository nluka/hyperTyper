class SettingsStorage {
  static set(key, value) {
    localStorage.setItem(key, value);
  }

  static setPunctuation(bool) {
    this.set(Settings.KEYS.PUNCTUATION, bool);
  }

  static setKeyboardVisual(bool) {
    this.set(Settings.KEYS.KEYBOARD_VISUAL, bool);
  }

  static setInstantDeath(bool) {
    this.set(Settings.KEYS.INSTANT_DEATH, bool);
  }

  static setTrackStatistics(bool) {
    this.set(Settings.KEYS.TRACK_STATISTICS, bool);
  }

  static setCountdown(bool) {
    this.set(Settings.KEYS.COUNTDOWN, bool);
  }

  static setSoundEffects(bool) {
    this.set(Settings.KEYS.SOUND_EFFECTS, bool);
  }

  static setSoundVolume(float) {
    this.set(Settings.KEYS.SOUND_VOLUME, float);
  }

  static setExpressionMode(mode) {
    this.set(Settings.KEYS.EXPRESSION_MODE, mode);
  }

  static setPhraseItemCount(count) {
    this.set(Settings.KEYS.PHRASE_ITEM_COUNT, count);
  }

  static setPhraseItemCollections(arrayOfItemCollections) {
    this.set(Settings.KEYS.PHRASE_ITEM_COLLECTIONS, JSON.stringify(arrayOfItemCollections));
  }

  static getBoolIfExists(settingKey) {
    const stringifiedBool = localStorage.getItem(settingKey);
    if (stringifiedBool === null) {
      return null;
    }
    return parseBool(stringifiedBool);
  }

  static getFloatIfExists(settingKey) {
    const stringifiedFloat = localStorage.getItem(settingKey);
    if (stringifiedFloat === null) {
      return null;
    }
    return parseFloat(stringifiedFloat);
  }

  static getStringIfExists(settingKey) {
    return localStorage.getItem(settingKey);
  }

  static getCountIfExists(settingKey) {
    const stringifiedCount = localStorage.getItem(settingKey);
    if (stringifiedCount === null) {
      return null;
    }
    return parseInt(stringifiedCount);
  }

  static getArrayIfExists(settingKey) {
    const stringifiedArray = localStorage.getItem(settingKey);
    if (stringifiedArray === null) {
      return null;
    }
    return JSON.parse(stringifiedArray);
  }
}