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
    //console.log(
    //  "Settings.phraseListsEnabledArr =",
    //  settings.phraseListsEnabledArr
    //);
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
addEventListenerForPhraseListButton(numbersListToggle_button, numbersList);
addEventListenerForPhraseListButton(symbolsListToggle_button, symbolsList);

// Programming Lists
addEventListenerForPhraseListButton(
  commonProgrammingKeywordsListToggle_button,
  commonProgrammingKeywordsList
);
addEventListenerForPhraseListButton(
  commonProgrammingOperatorsListToggle_button,
  commonProgrammingOperatorsList
);
