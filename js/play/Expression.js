class Expression {
  constructor(element) {
    this._element = element;
    //console.log("Expression object instantiated");
  }

  initLoadingState() {
    this.setInnerTextTo("Generating expression...");
    this.loadingIntervalId = setInterval(() => {
      switch (this._element.innerText) {
        case "Generating expression":
        case "Generating expression.":
        case "Generating expression..":
          this._element.innerText += ".";
          break;
        case "Generating expression...":
        default:
          this._element.innerText = "Generating expression";
      }
    }, 300);
  }

  clearLoadingState() {
    clearInterval(this.loadingIntervalId);
  }

  async getRandomQuoteObject() {
    const randomQuoteApiUrl = "https://api.quotable.io/random";
    let quoteText = "";
    let quoteAuthor = "";

    // try to get a quote from api
    await fetch(randomQuoteApiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          //console.log(
          //  `response.ok of fetch request to ${randomQuoteApiUrl} === false`
          //);
        }
      })
      .then((response) => {
        quoteText = response.content;
        quoteAuthor = response.author;
        if (settings.isPunctuationEnabled) {
          quoteText = this.correctSentenceSpacingErrors(quoteText);
        } else {
          quoteText = this.getAlphaNumericAndLowerCaseEquivalentOfString(
            quoteText
          );
        }
        quoteText = this.truncateTrailingWhitespaceOfString(quoteText);
        if (settings.isPunctuationEnabled && !!quoteText.match(/[^.?!]$/)) {
          quoteText += ".";
        }
        //console.log(`fetch request to ${randomQuoteApiUrl} succeeded`);
      })
      .catch((error) => {
        console.log(
         `Error retrieving quote from ${randomQuoteApiUrl}: ${error}`
        );
      });

    if (quoteText.length !== 0) {
      //console.log("quoteText is valid after API call, returning it");
      return {
        text: quoteText,
        author: quoteAuthor,
      };
    }
    //console.log("quoteText invalid after API call");

    // if api call failed to get valid quote, return one from quotes.js
    const choice = Math.floor(Math.random() * quotes.length);
    quoteText = quotes[choice]["text"];
    quoteAuthor = quotes[choice]["author"];
    if (quoteAuthor == null) quoteAuthor = "Unknown";

    if (settings.isPunctuationEnabled) {
      quoteText = this.correctSentenceSpacingErrors(quoteText);
    } else {
      quoteText = this.getAlphaNumericAndLowerCaseEquivalentOfString(quoteText);
    }
    quoteText = this.truncateTrailingWhitespaceOfString(quoteText);

    //console.log("generated quote from local quotes.js");
    return {
      text: quoteText,
      author: quoteAuthor,
    };
  }

  getAlphaNumericAndLowerCaseEquivalentOfString(string) {
    return string
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s{2,}/g, " ")
      .toLowerCase();
  }

  truncateTrailingWhitespaceOfString(string) {
    if (!!string.match(/ $/g)) {
      return string.replace(/ $/g, "");
    }
    return string;
  }

  correctSentenceSpacingErrors(string) {
    let stringCopy = string;
    const punctuationChars = [".", "?", "!", ",", ":", ";"];
    punctuationChars.forEach((char) => {
      stringCopy = this.correctSpacingErrorsForCharInString(char, stringCopy);
    });
    return stringCopy;
  }

  correctSpacingErrorsForCharInString(char, string) {
    let regex_str = `[${char}]`;
    if (char === ".") regex_str += "(?!\.)";
    regex_str += "[^ ]";
    const regex = new RegExp(regex_str);
    let stringCopy = string;
    while (!!stringCopy.match(regex)) {
      if (!!stringCopy.match(/\.\.\./)) continue;
      const matchedStringSegment = stringCopy.match(regex);
      const replacement_str = `${char} ${matchedStringSegment[0].charAt(1)}`;
      stringCopy = stringCopy.replace(regex, replacement_str);
    }
    return stringCopy;
  }

  getRandomizedPhraseObject() {
    const chanceOfInsertingPunctuationAtItem = 1 / 15;
    const chanceToGetRandomPunctuationChar =
      chanceOfInsertingPunctuationAtItem * 0.3;
    const chanceToAddQuotesAroundAnItem =
      chanceOfInsertingPunctuationAtItem * 0.7;
    let phraseText = "";

    for (let i = 0; i < settings.phraseItemsCount; i++) {
      let randItem = getRandItemFromArray(
        settings.phraseListsEnabledArr[
          getRandIndexInArray(settings.phraseListsEnabledArr)
        ]
      );

      if (
        settings.isPunctuationEnabled &&
        !!randItem.charAt(0).match(/[a-zA-Z]/) &&
        (!!phraseText.match(/[\.!?] $/) || phraseText.length === 0)
      ) {
        randItem =
          randItem.charAt(0).toUpperCase() + randItem.slice(1);
      }

      if (settings.isPunctuationEnabled) {

        randItem = this.chanceToReturnStringWrappedWithQuotes(
          randItem,
          chanceToAddQuotesAroundAnItem
        );
      }

      phraseText += randItem;

      if (settings.isPunctuationEnabled) {
        const randPunctuationChar = this.chanceToGetRandomPunctuationChar(
          chanceToGetRandomPunctuationChar
        );

        if (randPunctuationChar != '\0') {
          // if a punctuation char is returned, add it
          phraseText += randPunctuationChar;
        }
      }

      phraseText += " ";
    }

    if (settings.isPunctuationEnabled) {
      phraseText = this.correctSentenceEndingPunctuation(phraseText);
    }

    phraseText = this.truncateLastBlankSpace(phraseText);

    return {
      text: phraseText,
      author: "Randomly Generated",
    };
  }

  chanceToReturnStringWrappedWithQuotes(string, overallProbability_float) {
    if (probability(overallProbability_float / 2)) return `"${string}"`;
    if (probability(overallProbability_float / 2)) return `'${string}'`;
    return string;
  }

  chanceToGetRandomPunctuationChar(overallProbability_float) {
    if (probability(overallProbability_float * 0.05)) return ";";
    else if (probability(overallProbability_float * 0.05)) return ":";
    else if (probability(overallProbability_float * 0.15)) return "!";
    else if (probability(overallProbability_float * 0.15)) return "?";
    else if (probability(overallProbability_float * 0.25)) return ".";
    else if (probability(overallProbability_float * 0.35)) return ",";
    return "\0";
  }

  correctSentenceEndingPunctuation(sentence_str) {
    if (!!sentence_str.match(/[,;:] $/)) { // second last char is not [.!?]
      return sentence_str.slice(0, sentence_str.length - 2) + ".";
    } else if ( //
      !!sentence_str.match(/[^.!?] $/) ||
      !!sentence_str.match(/['"] $/)
    ) {
      return sentence_str.slice(0, sentence_str.length - 1) + ".";
    }
  }

  truncateLastBlankSpace(string) {
    if (!!string.match(/ $/) || !!string.match(/\. $/)) {
      // truncate last blank space
      return string.slice(0, string.length - 1);
    }
    return string;
  }

  setInnerTextTo(string) {
    this._element.innerText = string;
  }

  clearInnerText() {
    this._element.innerText = "";
    //console.log("Expression innerText cleared");
  }

  makeSelectableByUser() {
    this._element.classList.remove("unselectable");
  }

  makeUnselectableByUser() {
    this._element.classList.add("unselectable");
  }

  renderChildSpanTags(expressionText_str) {
    //console.log("Rendering expression span tags");
    //console.log("> creating span tags");
    expressionText_str.split("").forEach((char) => {
      const char_span = document.createElement("span");
      char_span.innerText = char;
      this._element.append(char_span);
    });
  }

  removeAllSpanStyles(element) {
    element.classList.remove("current-char");
    element.classList.remove("correct-char");
    element.classList.remove("incorrect-non-whitespace-char");
    element.classList.remove("incorrect-whitespace-char");
  }

  styleSpanAsCurrentChar(element) {
    element.classList.add("current-char");
  }

  unstyleSpanAsCurrentChar(element) {
    element.classList.remove("current-char");
  }

  labelSpanAsMistake(element) {
    element.classList.add("mistake");
  }

  removeMistakeLabelFromSpan(element) {
    element.classList.remove("mistake");
  }

  styleSpanAsCorrectChar(element) {
    element.classList.remove("current-char");
    element.classList.remove("incorrect-non-whitespace-char");
    element.classList.remove("incorrect-whitespace-char");
    element.classList.add("correct-char");
  }

  styleSpanAsIncorrectChar(element) {
    element.classList.remove("current-char");
    element.classList.remove("correct-char");
    if (element.innerText === " ") {
      element.classList.add("incorrect-whitespace-char");
    } else {
      element.classList.add("incorrect-non-whitespace-char");
    }
  }
}

const getRandItemFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandIndexInArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const probability = (n) => {
  return Math.random() < n;
};
