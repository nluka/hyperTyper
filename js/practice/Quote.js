class Quote {
  static async get() {
    const responseFromQuotableApi = await QuotableApi.get();
    let content = null;
    let author = null;
    if (this.isQuoteableApiResponseValid(responseFromQuotableApi)) {
      content = responseFromQuotableApi.content;
      author = responseFromQuotableApi.author;
    } else {
      const localQuote = LocalQuote.get();
      content = localQuote.content;
      author = localQuote.author;
    }
    content = this.getQuoteContentWithSettingsApplied(content);
    return {
      content,
      author
    }
  }

  static getQuoteContentWithSettingsApplied(quoteContent) {
    if (!Settings.punctuation) {
      quoteContent = StringEditor.getWithNoPunctuation(quoteContent);
    }
    return quoteContent;
  }

  static isQuoteableApiResponseValid(response) {
    if (
      response.content === null ||
      response.content === undefined ||
      response.content === "" ||
      response.content.length === 0
    ) {
      return false;
    }
    return true;
  }
}