const pageLoader = new Loader(loaderOverlay_div, loader_img);
const userStorage = new UserStorage();

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
    if (userChoice === true) { // true means user pressed "OK"
      userStorage.removeStatisticialItemsFromStorage();
      userStorage.retrieveAllStatisticalValues();
      userStorage.renderAllStatisticalValues();
    }
  });
};

main();
pageLoader.removeOverlay();
