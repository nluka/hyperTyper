class ElementVisibility {
  static isVisibleAttributeName = "data-visible";

  static applyStoredVisibilitySettings(
    args = {
      collapsibleElement,
      collapsibleElementId,
      toggleVisibilityButtonElement,
      defaultVisibilityBool
    }
  ) {
    const storedBool = ElementVisibilityStateStorage.getBoolIfExists(args.collapsibleElementId);
    if (storedBool === null) {
      this.applyDefaultVisibilitySettings(args);
      return;
    }
    this.set(args.collapsibleElement, storedBool);
    this.setToggleVisibilityButtonInnerTextBasedOnVisibilityBool(
      args.toggleVisibilityButtonElement,
      storedBool
    );
  }

  static applyDefaultVisibilitySettings(
    args = {
      collapsibleElement,
      collapsibleElementId,
      toggleVisibilityButtonElement,
      defaultVisibilityBool
    }
  ) {
    this.set(args.collapsibleElement, args.defaultVisibilityBool);
    this.setToggleVisibilityButtonInnerTextBasedOnVisibilityBool(
      args.toggleVisibilityButtonElement,
      args.defaultVisibilityBool
    );
  }

  static setToggleVisibilityButtonInnerTextBasedOnVisibilityBool(
    toggleVisibilityButtonElement,
    isVisible
  ) {
    if (isVisible) {
      toggleVisibilityButtonElement.innerText = "Hide";
      return;
    }
    toggleVisibilityButtonElement.innerText = "Show";
  }

  static set(element, bool) {
    element.setAttribute(this.isVisibleAttributeName, bool);
  }

  static addToggleButtonClickEventListener(
    args = {
      collapsibleElement,
      collapsibleElementId,
      toggleVisibilityButtonElement
    }
  ) {
    args.toggleVisibilityButtonElement.addEventListener(
      "click",
      () => {
        ElementVisibilityToggleButtonClickEventListener(
          args = {
            collapsibleElement: args.collapsibleElement,
            collapsibleElementId: args.collapsibleElementId,
            toggleVisibilityButtonElement: args.toggleVisibilityButtonElement
          }
        )
      }
    );
  }

  static toggle(
    args = {
      collapsibleElement,
      collapsibleElementId,
      toggleVisibilityButtonElement
    }
  ) {
    const previousBool = this.getIsVisibleAttributeBool(args.collapsibleElement);
    const newBool = !previousBool;
    this.setIsVisibleAttribute(args.collapsibleElement, newBool);
    this.setToggleVisibilityButtonInnerTextBasedOnVisibilityBool(
      args.toggleVisibilityButtonElement,
      newBool
    );
    ElementVisibilityStateStorage.setBool(
      args.collapsibleElementId,
      newBool
    );
  }

  static getIsVisibleAttributeBool(element) {
    return parseBool(element.getAttribute(this.isVisibleAttributeName));
  }

  static setIsVisibleAttribute(element, bool) {
    element.setAttribute(this.isVisibleAttributeName, bool);
  }
}

function ElementVisibilityToggleButtonClickEventListener(
  args = {
    collapsibleElement,
    collapsibleElementId,
    toggleVisibilityButtonElement
  }
) {
  ElementVisibility.toggle(args);
}