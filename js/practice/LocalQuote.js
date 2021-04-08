class LocalQuote {
  static get() {
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    const quoteContent = localQuotes[randomIndex]["content"];
    const quoteAuthor = this.getFormattedAuthor(localQuotes[randomIndex]["author"]);
    return {
      content: quoteContent,
      author: quoteAuthor
    }
  }

  static getFormattedAuthor(author) {
    if (author === null) {
      return "Unknown";
    }
    return author;
  }
}