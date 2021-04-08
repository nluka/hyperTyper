class Phrase {
  static AUTHOR = "Custom-Generated";
  static NO_ITEM_COLLECTIONS_SELECTED = null;

  constructor() {
    return {
      content: this.getContent(),
      author: Phrase.AUTHOR
    }
  }

  getContent() {
    const itemArray = this.getItemArray();
    if (Settings.punctuation) {
      return this.getPunctuatedContentStringFromItemArray(itemArray);
    }
    return this.getPlainContentStringFromItemArray(itemArray);
  }

  getItemArray() {
    let itemArray = [];
    for (let i = 0; i < Settings.phraseItemCount; i++) {
      const randomItemFromCollections = getRandomElementFromArray(
        getRandomElementFromArray(Settings.phraseItemCollections)
      );
      itemArray.push(randomItemFromCollections);
    }
    return itemArray;
  }

  getPlainContentStringFromItemArray(itemArray) {
    const contentString = itemArray.join(" ");
    return contentString;
  }

  getPunctuatedContentStringFromItemArray(itemArray) {
    itemArray[0] = StringEditor.getWithFirstCharacterCapitalized(itemArray[0]);
    itemArray.forEach((item, i) => {
      if (probabilityToReturnTrue(Settings.phrasePunctuationChancePerItem)) {
        const punctuatedItem = this.getPunctuatedItem(item);
        itemArray.splice(i, 1, punctuatedItem);
      }
    });
    let contentString = itemArray.join(" ");
    contentString = this.getContentStringWithProperCapitalization(contentString);
    contentString = this.getContentStringWithCorrectFinalPunctuation(contentString);
    return contentString;
  }

  getPunctuatedItem(item) {
    if (probabilityToReturnTrue(1/4)) {
      return this.getItemWrappedWithQuotes(item);
    }
    return this.getItemWithPunctuationPostfix(item);
  }

  getItemWrappedWithQuotes(item) {
    if (probabilityToReturnTrue(1/2)) {
      return `"${item}"`;
    }
    return `'${item}'`;
  }

  getItemWithPunctuationPostfix(item) {
    const randomFloatBetweenZeroAndOne = Math.random();
    if (randomFloatBetweenZeroAndOne > 0.65) {
      item += ",";
    } else if (randomFloatBetweenZeroAndOne > 0.40) {
      item += ".";
    } else if (randomFloatBetweenZeroAndOne > 0.25) {
      item += "?";
    } else if (randomFloatBetweenZeroAndOne > 0.10) {
      item += "!";
    } else if (randomFloatBetweenZeroAndOne > 0.05)  {
      item += ":";
    } else {
      item += ";";
    }
    //item = StringEditor.getWithFirstCharacterCapitalized(item);
    return item;
  }

  getContentStringWithCorrectFinalPunctuation(string) {
    if (!!string.match(/[,;:]$/)) {
      return this.getStringWithReplacedFinalCharacter(string, ".");
    }
    if (!!string.match(/[^.!?]$/)) {
      return string + ".";
    }
    return string;
  }

  getContentStringWithProperCapitalization(string) {
    const matches = string.match(/[.!?] [a-zA-Z]/g);
    if (matches === null) {
      return string;
    }
    matches.forEach((match) => {
      const matchCapitalized = match.slice(0, 2) + match.charAt(2).toUpperCase();
      string = string.replace(match, matchCapitalized);
    });
    return string;
  }

  getStringWithReplacedFinalCharacter(string, newFinalCharacter) {
    return string.slice(0, string.length - 1) + newFinalCharacter;
  }
}