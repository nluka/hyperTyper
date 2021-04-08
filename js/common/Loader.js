class Loader {
  constructor() {
    this._element = document.getElementById("loadingOverlayDiv");
    this.intervalId = null;
    this.loaderStep = 0;
    //console.log("Loader object instantiated");
  }

  animateInnerText() {
    if (loaderStep >= 4) loaderStep = 0;
    switch (loaderStep) {
      default:
      case 0:
        loadingScreen_div.innerText = "Loading";
      case 1:
        loadingScreen_div.innerText = "Loading.";
      case 2:
        loadingScreen_div.innerText = "Loading..";
      case 3:
        loadingScreen_div.innerText = "Loading...";
    }
    loaderStep++;
  }

  removeOverlay() {
    clearInterval(this.intervalId);
    // this.element.innerText = "";
    this._element.animate(
      [
        // keyframes
        { transform: "translateY(0)" },
        { transform: "translateY(-100vh)" },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
        fill: "forwards",
      }
    );

    setTimeout(clearLoadingScreenTimeoutCallback, 500);
  }
}

const clearLoadingScreenTimeoutCallback = () => {
  pageLoader._element.remove();
};
