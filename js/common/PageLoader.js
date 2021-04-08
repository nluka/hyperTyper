class PageLoader {
  static OVERLAY_FADE_OUT_DURATION_MS = 750;

  constructor(elements = { loaderGif, overlay }) {
    this.gifElement = elements.loaderGif;
    this.overlayElement = elements.overlay;
  }

  removeOverlay() {
    this.fadeOutOverlayElement();
    setTimeout(() => {
        PageLoader.removeHtmlElementsFromDom(this)
      }, PageLoader.OVERLAY_FADE_OUT_DURATION_MS
    );
  }

  fadeOutOverlayElement() {
    this.overlayElement.animate(
      [
        // keyframes
        {
          opacity: 1
        },
        {
          opacity: 0
        }
      ],
      {
        // timing options
        duration: PageLoader.OVERLAY_FADE_OUT_DURATION_MS,
        iterations: 1,
        fill: "forwards",
        //easing: "cubic-bezier(.85, .2, .75, .95)",
      }
    );
  }

  static removeHtmlElementsFromDom(instance) {
    instance.gifElement.remove();
    instance.overlayElement.remove();
  }
}