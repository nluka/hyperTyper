class QuotableApi {
  static BASE_URL = "https://api.quotable.io/random";

  static async get() {
    const response = await this.getFetch(this.BASE_URL);
    return {
      content: response.content,
      author: response.author
    }
  }

  static async getFetch(baseUrl, params = {}) {
    const completeUrl = this.getUrlWithAppendedQueries(baseUrl, params);
    const response = await fetch(completeUrl).then(
      (response) => {
        return response.json();
      }
    ).catch((error) => {
      console.log(`Error retrieving quote from ${completeUrl}: ${error}`);
    });
    return response;
  }

  static getUrlWithAppendedQueries(baseUrl, params = {}) {
    if (isObjectEmpty(params)) {
      return baseUrl;
    }
    const queryEntries = Object.entries(params);
    const queryStrings = queryEntries.map((param) => {
      return `${param[0]}=${param[1]}`;
    });
    const queryString = queryStrings.join("&");
    const urlWithAppendedQueries = `${baseUrl}?${queryString}`;
    return urlWithAppendedQueries;
  }
}