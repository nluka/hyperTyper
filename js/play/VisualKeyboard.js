const visualKeyboardEventCodeToElementMap = {
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
  //"Tab": tabKey_div,
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

class VisualKeyboard {
  constructor(element, event) {
    this._element = element;
    //console.log("VisualKeyboard object instantiated");
  }

  hide() {
    this._element.classList.add("hidden");
  }

  show() {
    this._element.classList.remove("hidden");
  }

  addKeyEventListeners() {
    playerText_input.addEventListener("keydown", visualKeyboardKeydownCallback);
    playerText_input.addEventListener("keyup", visualKeyboardKeyupCallback);
    // playerText_input.addEventListener(
    //   "keydown",
    //   playerTextInputFocusEventCallback,
    //   { once: true }
    // );
    //console.log("Added VisualKeyboard event listeners");
  }

  removeKeyEventListeners() {
    playerText_input.removeEventListener(
      "keydown",
      visualKeyboardKeydownCallback
    );
    playerText_input.removeEventListener("keyup", visualKeyboardKeyupCallback);
    //console.log("Removed VisualKeyboard event listeners");
  }
}

const visualKeyboardKeydownCallback = (event) => {
  const evtCode = event.code;
  if (evtCode in visualKeyboardEventCodeToElementMap) {
    if (event.getModifierState("CapsLock")) {
      visualKeyboardEventCodeToElementMap["CapsLock"].classList.add("active");
    } else {
      visualKeyboardEventCodeToElementMap["CapsLock"].classList.remove(
        "active"
      );
    }
    visualKeyboardEventCodeToElementMap[evtCode].classList.add("pressed");
  }
};

const visualKeyboardKeyupCallback = (event) => {
  const evtCode = event.code;
  if (evtCode in visualKeyboardEventCodeToElementMap) {
    const correspondingKeyElement =
      visualKeyboardEventCodeToElementMap[evtCode];
    correspondingKeyElement.classList.remove("pressed");
  }
};

const playerTextInputKeydownEventCallback = (event) => {
  if (event.getModifierState("CapsLock")) {
    visualKeyboardEventCodeToElementMap["CapsLock"].classList.add("active");
  }
};
