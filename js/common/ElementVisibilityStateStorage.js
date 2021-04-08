class ElementVisibilityStateStorage {
  static getBoolIfExists(elementId) {
    const stringifiedBool = this.getIsVisibleString(elementId);
    if (stringifiedBool === null) {
      return null;
    }
    return parseBool(stringifiedBool);
  }

  static getIsVisibleString(elementId) {
    return localStorage.getItem(`${elementId}IsVisible`);
  }

  static setBool(elementId, isVisible) {
    this.setIsVisibleString(elementId, isVisible);
  }

  static setIsVisibleString(elementId, isVisible) {
    localStorage.setItem(`${elementId}IsVisible`, `${isVisible}`);
  }

  static toggleBool(elementId) {
    const previousStringifiedBool = this.getIsVisibleString(elementId)
    if (previousStringifiedBool === null) {
      throw `Cannot toggle localstorage '${elementId}IsVisible' value because no value exists`;
    }
    const invertedBool = !(parseBool(previousBoolStringified))
    this.setIsVisibleString(elementId, invertedBool);
  }
}