toggleViewWpmStatistics_button.addEventListener("click", () => {
  wpmStatistics_table.classList.toggle("hidden");
  toggleInnerTextHideAndShow(toggleViewWpmStatistics_button);
  userStorage.toggleIsHiddenStoredBoolValue(
    "isWpmStatisticsHidden",
    wpmStatistics_table
  );
});

toggleViewAccuracyStatistics_button.addEventListener("click", () => {
  accuracyStatistics_table.classList.toggle("hidden");
  toggleInnerTextHideAndShow(toggleViewAccuracyStatistics_button);
  userStorage.toggleIsHiddenStoredBoolValue(
    "isAccuracyStatisticsHidden",
    accuracyStatistics_table
  );
});

toggleViewParticipationStatistics_button.addEventListener("click", () => {
  participationStatistics_table.classList.toggle("hidden");
  toggleInnerTextHideAndShow(toggleViewParticipationStatistics_button);
  userStorage.toggleIsHiddenStoredBoolValue(
    "isParticipationStatisticsHidden",
    participationStatistics_table
  );
});

function toggleInnerTextHideAndShow(element_button) {
  if (element_button.innerText === "Hide") {
    element_button.innerText = "Show";
  } else {
    element_button.innerText = "Hide";
  }
}
