const pageLoader = new Loader();
const userStorage = new UserStorage();

const loadingAnimationIntervalCallback = () => {
  pageLoader.animateInnerText();
};

pageLoader.intervalId = setInterval(loadingAnimationIntervalCallback, 400);

const playerTextInputDuringIdleCallback = () => {
  playerText_input.value = "";
};

const main = () => {
  userStorage.retrieveAndApplyYourStatisticsPanelViewPreferences();
  userStorage.retrieveAllStatisticalValues();
  userStorage.renderAllStatisticalValues();
  clearStatisticsStorage_button.addEventListener("click", () => {
    const userChoice = confirm(
      "Are you sure you want to clear your statistics?\nThis cannot be undone."
    );
    if (userChoice === true) {
      // true means user pressed "OK"
      userStorage.removeStatisticialItemsFromStorage();
      userStorage.retrieveAllStatisticalValues();
      userStorage.renderAllStatisticalValues();
    }
  });
};

main();
pageLoader.removeOverlay();
