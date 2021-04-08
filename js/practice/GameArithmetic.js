class GameArithmetic {
  static calculateNetWordsPerMinute(textCharacterCount, secondsElapsed) {
    const words = textCharacterCount / CHARACTERS_PER_WORD;
    const minutes = secondsElapsed / SECONDS_PER_MINUTE;
    return words / minutes;
  }

  static calculateAccuracyPercentage(textCharacterCount, charactersTypedCount, mistakeCount) {
    const fractionalAccuracy = (textCharacterCount / (charactersTypedCount + mistakeCount));
    return fractionalAccuracy * 100;
  }
}