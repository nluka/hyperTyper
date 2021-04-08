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
    let phraseText = "";

    for (let i = 0; i < settings.phraseItemsCount; i++) {
      let randElement = getRandElementFromArray(
        settings.phraseListsEnabledArr[
          getRandIndexInArray(settings.phraseListsEnabledArr)
        ]
      );

      if (
        settings.isPunctuationEnabled &&
        !!randElement.charAt(0).match(/[a-zA-Z]/) &&
        (!!phraseText.match(/[\.!?] $/) || phraseText.length === 0)
      ) {
        randElement =
          randElement.charAt(0).toUpperCase() + randElement.slice(1);
      }

      if (settings.isPunctuationEnabled) {
        if (probability(1 / 24)) randElement = `"${randElement}"`;
        else if (probability(1 / 24)) randElement = `'${randElement}'`;
      }

      phraseText += randElement;

      if (settings.isPunctuationEnabled) {
        if (probability(1 / 40)) phraseText += ";";
        else if (probability(1 / 35)) phraseText += ":";
        else if (probability(1 / 30)) phraseText += "!";
        else if (probability(1 / 25)) phraseText += "?";
        else if (probability(1 / 15)) phraseText += ".";
        else if (probability(1 / 10)) phraseText += ",";
      }

      phraseText += " ";
    }

    if (settings.isPunctuationEnabled) {
      if (!!phraseText.match(/[,;:] $/)) {
        phraseText = phraseText.slice(0, phraseText.length - 2) + ".";
      } else if (
        !!phraseText.match(/[^.!?] $/) ||
        !!phraseText.match(/['"] $/)
      ) {
        phraseText = phraseText.slice(0, phraseText.length - 1) + ".";
      }
    }

    if (!!phraseText.match(/ $/) || !!phraseText.match(/\. $/)) {
      // truncate last blank space
      phraseText = phraseText.slice(0, phraseText.length - 1);
    }

    return {
      text: phraseText,
      author: "Randomly Generated",
    };
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
      char_span.style.borderRight = "0.1px solid var(--bg-color-content-panel)";
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

const getRandElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandIndexInArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const probability = (n) => {
  return Math.random() < n;
};
