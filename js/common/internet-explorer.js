function isUsersBrowserInternetExplorer() {
  let ua = navigator.userAgent;
  // MSIE used to detect old browsers and Trident used to newer ones
  return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
}

if (isUsersBrowserInternetExplorer()) {
  const internetExplorerOverlay_div = document.createElement("div");
  internetExplorerOverlay_div.classList.add("internet-explorer-overlay");
  internetExplorerOverlay_div.innerText =
    "This website uses features which are not supported by the Internet Explorer web browser. Please use a different web browser such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Opera to access this page.";
  _body.appendChild(internetExplorerOverlay_div);
}
