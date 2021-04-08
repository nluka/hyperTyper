const addCheckboxEventListener = (checkbox_input, correspondingSettingKey) => {
  checkbox_input.addEventListener("change", () => {
    settings[correspondingSettingKey] = !settings[correspondingSettingKey];
    localStorage.setItem(
      correspondingSettingKey,
      `${settings[correspondingSettingKey]}`
    );
    //console.log(
    //  correspondingSettingKey + " =",
    //  settings[correspondingSettingKey]
    //);
  });
};

addCheckboxEventListener(punctuation_checkbox, "isPunctuationEnabled");
addCheckboxEventListener(visualKeyboard_checkbox, "isVisualKeyboardEnabled");
visualKeyboard_checkbox.addEventListener("change", () => {
  visualKeyboard_div.classList.toggle("hidden");
  if (visualKeyboard_div.classList.contains("hidden")) {
    visualKeyboard.removeKeyEventListeners();
  } else {
    visualKeyboard.addKeyEventListeners();
  }
});
addCheckboxEventListener(suddenDeath_checkbox, "isSuddenDeathEnabled");
addCheckboxEventListener(trackStatistics_checkbox, "isResultTrackingEnabled");
addCheckboxEventListener(countdown_checkbox, "isCountdownEnabled");
addCheckboxEventListener(soundEnable_checkbox, "isSoundEnabled");

soundEnable_checkbox.addEventListener("change", () => {
  if (soundEnable_checkbox.checked) {
    soundVolume_range.value =
      settings.soundVolumeRangeValueBeforeDisabling * 100;
    settings.soundVolume = soundVolume_range.value / 100;
    soundVolume_range.removeAttribute("disabled");
    //console.log("soundVolumeBeforeDisablingRangeInput =", settings.soundVolume);
    //console.log("soundVolume_range.value =", soundVolume_range.value);
  } else {
    soundVolume_range.setAttribute("disabled", "disabled");
    settings.soundVolumeBeforeDisablingRangeInput = soundVolume_range.value;
    soundVolume_range.value = 0;
    //console.log("soundVolumeBeforeDisablingRangeInput =", settings.soundVolume);
  }
});

soundVolume_range.addEventListener("change", () => {
  const newVolume = soundVolume_range.value / 100;
  settings.setSoundVolumeTo(newVolume);
  sound.setVolumeTo(newVolume);
  //console.log("soundVolume =", newVolume);
});
