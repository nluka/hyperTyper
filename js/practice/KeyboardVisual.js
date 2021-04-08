class KeyboardVisual {
  static eventCodeToKeyElementMap = {
    Backquote: backquoteKey_div,
    Digit1: digit1Key_div,
    Digit2: digit2Key_div,
    Digit3: digit3Key_div,
    Digit4: digit4Key_div,
    Digit5: digit5Key_div,
    Digit6: digit6Key_div,
    Digit7: digit7Key_div,
    Digit8: digit8Key_div,
    Digit9: digit9Key_div,
    Digit0: digit0Key_div,
    Minus: minusKey_div,
    Equal: equalKey_div,
    Backspace: backspaceKey_div,
    //Tab: tabKey_div,
    KeyQ: qKey_div,
    KeyW: wKey_div,
    KeyE: eKey_div,
    KeyR: rKey_div,
    KeyT: tKey_div,
    KeyY: yKey_div,
    KeyU: uKey_div,
    KeyI: iKey_div,
    KeyO: oKey_div,
    KeyP: pKey_div,
    BracketLeft: bracketLeftKey_div,
    BracketRight: bracketRightKey_div,
    Backslash: backslashKey_div,
    CapsLock: capsLockKey_div,
    KeyA: aKey_div,
    KeyS: sKey_div,
    KeyD: dKey_div,
    KeyF: fKey_div,
    KeyG: gKey_div,
    KeyH: hKey_div,
    KeyJ: jKey_div,
    KeyK: kKey_div,
    KeyL: lKey_div,
    Semicolon: semicolonKey_div,
    Quote: quoteKey_div,
    Enter: enterKey_div,
    ShiftLeft: shiftLeftKey_div,
    KeyZ: zKey_div,
    KeyX: xKey_div,
    KeyC: cKey_div,
    KeyV: vKey_div,
    KeyB: bKey_div,
    KeyN: nKey_div,
    KeyM: mKey_div,
    Comma: commaKey_div,
    Period: periodKey_div,
    Slash: slashKey_div,
    ShiftRight: shiftRightKey_div,
    ControlLeft: controlLeftKey_div,
    AltLeft: altLeftKey_div,
    Space: spaceKey_div,
    AltRight: altRightKey_div,
    ControlRight: controlRightKey_div,
  };

  constructor(containerElement) {
    this.containerElement = containerElement;
    this.keysPressed = [];
  }

  initializeElementVisibilityState() {
    if (Settings.keyboardVisual) {
      this.show();
    }
  }

  show() {
    this.containerElement.setAttribute("data-visible", true);
    Settings.keyboardVisual = true;
  }

  addAllEventListeners() {
    this.addKeyEventListeners();
    this.addGameInputFocusAndBlurEventListeners();
  }

  addKeyEventListeners() {
    gameInput.element.addEventListener("keydown", () => {
      this.keydownEventHandler(event);
    });
    gameInput.element.addEventListener("keyup", () => {
      this.keyupEventHandler(event);
    });
  }

  addGameInputFocusAndBlurEventListeners() {
    document.addEventListener("click", () => {
      this.gameInputElementFocusEventHandler(event);
      this.gameInputElementBlurEventHandler(event);
    });
    document.addEventListener("keydown", () => {
      this.gameInputElementFocusEventHandler(event);
      this.gameInputElementBlurEventHandler(event);
    });
  }

  keydownEventHandler(event) {
    if (!(event.code in KeyboardVisual.eventCodeToKeyElementMap)) {
      return;
    }
    this.styleKeyAsPressed(KeyboardVisual.eventCodeToKeyElementMap[event.code]);
    if (this.isCapsLockEnabled(event)) {
      this.styleCapsLockAsActive();
      return;
    }
    this.removeActiveStyleFromCapsLock();
  }

  styleKeyAsPressed(keyElement) {
    keyElement.classList.add("pressed");
    this.keysPressed.push(keyElement);
  }

  isCapsLockEnabled(event) {
    return event.getModifierState("CapsLock");
  }

  styleCapsLockAsActive() {
    KeyboardVisual.eventCodeToKeyElementMap["CapsLock"].classList.add("active");
  }

  removeActiveStyleFromCapsLock() {
    KeyboardVisual.eventCodeToKeyElementMap["CapsLock"].classList.remove("active");
  }

  keyupEventHandler(event) {
    if (!this.isVisible() || !KeyboardVisual.doesEventCodeCorrespondToAValidKey(event.code)) {
      return;
    }
    const keyElement = KeyboardVisual.eventCodeToKeyElementMap[event.code];
    this.removePressedStyleFromKey(keyElement);
  }

  isVisible() {
    return parseBool(this.containerElement.getAttribute("data-visible"));
  }

  gameInputElementBlurEventHandler() {
    if (document.activeElement === gameInput.element) {
      return;
    }
    this.keysPressed.forEach((key) => {
      this.removePressedStyleFromKey(key);
    });
    this.removeActiveStyleFromCapsLock();
  }

  gameInputElementFocusEventHandler(event) {
    if (document.activeElement !== gameInput.element) {
      return;
    }
    if (this.isCapsLockEnabled(event)) {
      this.styleCapsLockAsActive();
    }
  }

  static doesEventCodeCorrespondToAValidKey(eventCode) {
    return (eventCode in this.eventCodeToKeyElementMap);
  }

  removePressedStyleFromKey(keyElement) {
    keyElement.classList.remove("pressed");
    const keyElementIndex = this.keysPressed.indexOf(keyElement);
    this.keysPressed.splice(keyElementIndex, 1);
  }

  hide() {
    this.containerElement.setAttribute("data-visible", false);
    Settings.keyboardVisual = false;
  }
}