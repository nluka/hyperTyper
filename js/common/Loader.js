class Loader {
  constructor(loadingOverlay_element, loader_element) {
    this._element = loader_element;
    this.overlay_element = loadingOverlay_element;
    //console.log("Loader object instantiated");
  }

  removeOverlay() {
    const overlaySlideUpAnimationDurationMs = 750;

    this.overlay_element.animate(
      [
        // keyframes
        {
          //transform: "translateY(0)",
          opacity: 1
        },
        {
          //transform: "translateY(-100vh)",
          opacity: 0
        },
      ],
      {
        // timing options
        duration: overlaySlideUpAnimationDurationMs,
        iterations: 1,
        fill: "forwards",
        easing: "cubic-bezier(.85, .2, .75, .95)",
      }
    );

    setTimeout(
      removeLoaderAndOverlayTimeoutCallback,
      overlaySlideUpAnimationDurationMs
    );
  }
}

const removeLoaderAndOverlayTimeoutCallback = () => {
  pageLoader._element.remove();
  pageLoader.overlay_element.remove();
};
