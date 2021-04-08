toggleViewSettings_button.addEventListener("click", () => {
  settingsMenu_div.classList.toggle("hidden");
  toggleInnerTextHideAndShow(toggleViewSettings_button);
  userStorage.toggleIsHiddenStoredBoolValue(
    "isSettingsMenuHidden",
    settingsMenu_div
  );
});

toggleViewGameStatistics_button.addEventListener("click", () => {
  gameStatistics_table.classList.toggle("hidden");
  toggleInnerTextHideAndShow(toggleViewGameStatistics_button);
  userStorage.toggleIsHiddenStoredBoolValue(
    "isGameStatisticsHidden",
    gameStatistics_table
  );
});

toggleViewMistakeAnalysis_button.addEventListener("click", () => {
  analyzedExpression_div.classList.toggle("hidden");
  toggleInnerTextHideAndShow(toggleViewMistakeAnalysis_button);
  userStorage.toggleIsHiddenStoredBoolValue(
    "isMistakeAnalysisHidden",
    analyzedExpression_div
  );
});

function toggleInnerTextHideAndShow(element_button) {
  if (element_button.innerText === "Hide") {
    element_button.innerText = "Show";
  } else {
    element_button.innerText = "Hide";
  }
}
