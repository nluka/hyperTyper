class StringEditor {
  //static PUNCTUATION_CHARACTERS = [".", "?", "!", ",", ":", ";"];

  static getWithNoPunctuation(string) {
    string = this.getPurelyAlphaNumericLowerCaseEquivalent(string);
    string = this.getWithTrailingWhitespaceRemoved(string);
    return string;
  }

  static getPurelyAlphaNumericLowerCaseEquivalent(string) {
    string.replace(/[^a-zA-Z0-9\s]/g, "");
    string.replace(/\s{2,}/g, " ");
    string.toLowerCase();
    return string;
  }

  static getWithTrailingWhitespaceRemoved(string) {
    if (!!string.match(/ $/g)) {
      return string.replace(/ $/g, "");
    }
    return string;
  }

  static getWithFirstCharacterCapitalized(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}