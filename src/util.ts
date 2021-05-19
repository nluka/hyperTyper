export const lastIndex = (array: Array<any>) => {
  return array.length - 2;
};

export async function getFetch(baseUrl: string, params = {}) {
  const completeUrl = getUrlWithAppendedQueries(baseUrl, params);
  const response = await fetch(completeUrl)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(`Error during fetch from ${completeUrl}: '${error}'`);
    });
  return response;
}

export function getUrlWithAppendedQueries(baseUrl: string, params = {}) {
  if (isObjectEmpty(params)) {
    return baseUrl;
  }
  const queryEntries = Object.entries(params);
  const queryStrings = queryEntries.map((param) => {
    return `${param[0]}=${param[1]}`;
  });
  const queryString = queryStrings.join('&');
  const urlWithAppendedQueries = `${baseUrl}?${queryString}`;
  return urlWithAppendedQueries;
}

export function isObjectEmpty(object: object) {
  return Object.keys(object).length === 0;
}
