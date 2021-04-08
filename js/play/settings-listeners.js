// GAMEPLAY/AUDIO

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

// EXPRESSION MODE/PHRASE

const spliceArrayFromParentArray = (arrayToRemove, parentArray) => {
  // find index of array to remove
  let i = parentArray.findIndex((element) => element === arrayToRemove);
  // remove that array from the parent array
  parentArray.splice(i, 1);
};

const addEventListenerForPhraseListButton = (element_button, wordList) => {
  element_button.addEventListener("click", () => {
    if (!element_button.classList.contains("on")) {
      settings.phraseListsEnabledArr.push(wordList);
    } else {
      spliceArrayFromParentArray(wordList, settings.phraseListsEnabledArr);
    }
    settings.setPhraseListsEnabledArrTo(settings.phraseListsEnabledArr);
    element_button.classList.toggle("on");
    console.log(
     "Settings.phraseListsEnabledArr =",
     settings.phraseListsEnabledArr
    );
  });
};

const toggleDisabledAttributeOfAllPhraseSettingsElements = () => {
  phraseItemsNumber_input.toggleAttribute("disabled");
  if (phraseItemsNumber_input.hasAttribute("disabled")) {
    //phraseItemsNumber_input.value = "";
  } else {
    phraseItemsNumber_input.value = settings.phraseItemsCount;
  }
  phraseListToggle_buttons.forEach((button) => {
    button.toggleAttribute("disabled");
  });
};

// EXPRESSION MODE

quoteModeEnable_button.addEventListener("click", () => {
  if (quoteModeEnable_button.classList.contains("on")) return;
  quoteModeEnable_button.classList.toggle("on");
  phraseModeEnable_button.classList.toggle("on");
  if (quoteModeEnable_button.classList.contains("on")) {
    settings.setExpressionModeTo("quote");
  } else {
    settings.setExpressionModeTo("phrase");
  }
  toggleDisabledAttributeOfAllPhraseSettingsElements();
  //console.log("Settings.expressionMode =", settings.expressionMode);
});
phraseModeEnable_button.addEventListener("click", () => {
  if (phraseModeEnable_button.classList.contains("on")) return;
  phraseModeEnable_button.classList.toggle("on");
  quoteModeEnable_button.classList.toggle("on");
  if (phraseModeEnable_button.classList.contains("on")) {
    settings.setExpressionModeTo("phrase");
  } else {
    settings.setExpressionModeTo("quote");
  }
  toggleDisabledAttributeOfAllPhraseSettingsElements();
  //console.log("Settings.phraseItemsCount =", settings.expressionMode);
});

// PHRASE

// Items
phraseItemsNumber_input.addEventListener("input", () => {
  if (phraseItemsNumber_input.value < 1) phraseItemsNumber_input.value = 1;
  if (phraseItemsNumber_input.value > 100) phraseItemsNumber_input.value = 100;
  settings.setPhraseItemsCountTo(phraseItemsNumber_input.value);
  //console.log("Settings.phraseItemsCount =", settings.phraseItemsCount);
});

// English Lists
addEventListenerForPhraseListButton(
  commonEnglishWordsListToggle_button,
  commonEnglishWordsList
);
addEventListenerForPhraseListButton(
  randomEnglishWordsListToggle_button,
  randomEnglishWordsList
);
// Numbers/symbols lists
addEventListenerForPhraseListButton(numbersListToggle_button, numbersList);
addEventListenerForPhraseListButton(symbolsListToggle_button, symbolsList);

// General programming Lists
addEventListenerForPhraseListButton(
  commonProgrammingKeywordsListToggle_button,
  commonProgrammingKeywordsList
);
addEventListenerForPhraseListButton(
  commonProgrammingOperatorsListToggle_button,
  commonProgrammingOperatorsList
);

// Language specific lists
// C
addEventListenerForPhraseListButton(
  cProgrammingKeywordsListToggle_button,
  cKeywordsList
);
addEventListenerForPhraseListButton(
  cProgrammingOperatorsListToggle_button,
  cOperatorsList
);
// C++
addEventListenerForPhraseListButton(
  cppProgrammingKeywordsListToggle_button,
  cppKeywordsList
);
addEventListenerForPhraseListButton(
  cppProgrammingOperatorsListToggle_button,
  cppOperatorsList
);
// C#
addEventListenerForPhraseListButton(
  csharpProgrammingKeywordsListToggle_button,
  csharpKeywordsList
);
addEventListenerForPhraseListButton(
  csharpProgrammingOperatorsListToggle_button,
  csharpOperatorsList
);
// CSS3
addEventListenerForPhraseListButton(
  css3PropertiesListToggle_button,
  css3PropertiesList
);
// HTML5
addEventListenerForPhraseListButton(
  html5TagsListToggle_button,
  html5TagsList
);
// Java
addEventListenerForPhraseListButton(
  javaProgrammingKeywordsListToggle_button,
  javaKeywordsList
);
addEventListenerForPhraseListButton(
  javaProgrammingOperatorsListToggle_button,
  javaOperatorsList
);
// JavaScript
addEventListenerForPhraseListButton(
  javascriptProgrammingKeywordsListToggle_button,
  javascriptKeywordsList
);
addEventListenerForPhraseListButton(
  javascriptProgrammingOperatorsListToggle_button,
  javascriptOperatorsList
);
// Python
addEventListenerForPhraseListButton(
  pythonProgrammingKeywordsListToggle_button,
  pythonKeywordsList
);
addEventListenerForPhraseListButton(
  pythonProgrammingOperatorsListToggle_button,
  pythonOperatorsList
);
