class UserStorage {
  constructor() {
    //console.log("UserStorage object instantiated");
  }

  updateWpmAndAccuracyStatisticalValues() {
    //console.log("Updating wpm and accuracy statistical values");

    this.setLastGameValue("wpmLastGame", game.result.wpm);
    this.updateLastTenGamesArray("wpmLastTenGames", game.result.wpm);
    this.updateAverageToDateValue("wpmAverageToDate", game.result.wpm);
    this.updateAllTimeBestValue("wpmAllTimeBest", game.result.wpm);
    //console.log("> updated wpm values");

    this.setLastGameValue("accuracyLastGame", game.result.accuracy);
    this.updateLastTenGamesArray("accuracyLastTenGames", game.result.accuracy);
    this.updateAverageToDateValue(
      "accuracyAverageToDate",
      game.result.accuracy
    );
    this.updateAllTimeBestValue("accuracyAllTimeBest", game.result.accuracy);
    //console.log("> updated accuracy values");
  }

  setLastGameValue(key_str, newValue) {
    localStorage.setItem(
      key_str,
      newValue.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)
    );
  }

  updateLastTenGamesArray(key_str, newValue) {
    const storedArray_str = localStorage.getItem(key_str);
    if (storedArray_str == null) {
      localStorage.setItem(
        key_str,
        `[${newValue.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)}]`
      );
      return;
    }
    const storedArray = JSON.parse(storedArray_str);

    let newArray = storedArray;

    if (storedArray.length === 10) newArray = storedArray.slice(1, 10);

    newArray.push(parseFloat(newValue.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)));

    localStorage.setItem(key_str, JSON.stringify(newArray));
  }

  updateAverageToDateValue(key_str, newValue) {
    const previousAverage_str = localStorage.getItem(key_str);
    if (previousAverage_str == null) {
      localStorage.setItem(
        key_str,
        newValue.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)
      );
      return;
    }
    const previousAverage = parseFloat(previousAverage_str);

    const previousNumOfGamesCompleted_str = localStorage.getItem(
      "gamesCompleted"
    );
    if (previousNumOfGamesCompleted_str == null) return;
    const previousNumOfGamesCompleted = parseInt(
      previousNumOfGamesCompleted_str
    );

    const newAverage =
      (previousAverage * previousNumOfGamesCompleted + newValue) /
      (previousNumOfGamesCompleted + 1);

    localStorage.setItem(
      key_str,
      newAverage.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)
    );
  }

  updateAllTimeBestValue(key_str, newValue) {
    const previousBest_str = localStorage.getItem(key_str);
    if (previousBest_str == null) {
      localStorage.setItem(
        key_str,
        newValue.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)
      );
      return;
    }
    const previousBest = parseFloat(previousBest_str);

    if (newValue > previousBest) {
      localStorage.setItem(
        key_str,
        newValue.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)
      );
    }
  }

  incrementPlaytimeValueBy(amount) {
    const previousPlaytimeInSeconds_str = localStorage.getItem(
      "playtimeInSeconds"
    );
    if (previousPlaytimeInSeconds_str == null) {
      localStorage.setItem(
        "playtimeInSeconds",
        amount.toFixed(LOCAL_STORAGE_DECIMAL_PLACES)
      );
    } else {
      localStorage.setItem(
        "playtimeInSeconds",
        (parseFloat(previousPlaytimeInSeconds_str) + amount).toFixed(
          LOCAL_STORAGE_DECIMAL_PLACES
        )
      );
    }
  }

  incrementValueOf(key_str) {
    const previousValue_str = localStorage.getItem(key_str);
    if (previousValue_str == null) {
      localStorage.setItem(key_str, `${1}`);
    } else {
      localStorage.setItem(key_str, `${parseInt(previousValue_str) + 1}`);
    }
  }

  retrieveIntValueOf(key_str) {
    const value_str = localStorage.getItem(key_str);
    if (value_str == null) return 0;
    return parseInt(value_str);
  }

  retrieveAllStatisticalValues() {
    this.wpmLastGame = this.retrieveFloatValueOf("wpmLastGame", 1);
    this.wpmLastTenGames = this.retrieveArrayAverageOf("wpmLastTenGames", 1);
    this.wpmAverageToDate = this.retrieveFloatValueOf("wpmAverageToDate", 1);
    this.wpmAllTimeBest = this.retrieveFloatValueOf("wpmAllTimeBest", 1);

    this.accuracyLastGame = this.retrieveFloatValueOf("accuracyLastGame", 1);
    this.accuracyLastTenGames = this.retrieveArrayAverageOf(
      "accuracyLastTenGames",
      1
    );
    this.accuracyAverageToDate = this.retrieveFloatValueOf(
      "accuracyAverageToDate",
      1
    );
    this.accuracyAllTimeBest = this.retrieveFloatValueOf(
      "accuracyAllTimeBest",
      1
    );

    this.playtimeInSeconds = this.retrieveFloatValueOf("playtimeInSeconds", 1);
    this.gamesCompleted = this.retrieveCountValueOf("gamesCompleted");
    this.gamesAbandoned = this.retrieveCountValueOf("gamesAbandoned");
    this.gamesDisqualified = this.retrieveCountValueOf("gamesDisqualified");
    this.gamesCheated = this.retrieveCountValueOf("gamesCheated");

    //console.log("Retrieved all statistical values from localstorage");
  }

  retrieveFloatValueOf(key_str, decimalPlaces) {
    const value_str = localStorage.getItem(key_str);
    if (value_str != null) {
      return roundFloat(parseFloat(value_str), decimalPlaces);
    }
    return "---";
  }

  retrieveCountValueOf(key_str) {
    const value_str = localStorage.getItem(key_str);
    if (value_str != null) {
      return parseInt(value_str);
    }
    return 0;
  }

  retrieveArrayAverageOf(key_str, decimalPlaces) {
    const storedArray_str = localStorage.getItem(key_str);
    if (storedArray_str == null) {
      return "---";
    }
    const storedArray = JSON.parse(storedArray_str);

    let arraySum = 0;
    for (let i = 0; i < storedArray.length; i++) {
      arraySum += parseFloat(storedArray[i]);
    }

    return roundFloat(arraySum / storedArray.length, decimalPlaces);
  }

  renderAllStatisticalValues() {
    wpmLastGame_td.innerText = this.wpmLastGame;
    wpmLastTenGames_td.innerText = this.wpmLastTenGames;
    wpmAverageToDate_td.innerText = this.wpmAverageToDate;
    wpmAllTimeBest_td.innerText = this.wpmAllTimeBest;

    accuracyLastGame_td.innerText = this.getFormattedPercentageValueString(
      this.accuracyLastGame
    );
    accuracyLastTenGames_td.innerText = this.getFormattedPercentageValueString(
      this.accuracyLastTenGames
    );
    accuracyAverageToDate_td.innerText = this.getFormattedPercentageValueString(
      this.accuracyAverageToDate
    );
    accuracyAllTimeBest_td.innerText = this.getFormattedPercentageValueString(
      this.accuracyAllTimeBest
    );

    if (this.playtimeInSeconds === "---") {
      playtime_td.innerText = "0 mins";
    } else if (this.playtimeInSeconds < 3600) {
      playtime_td.innerText =
        (this.playtimeInSeconds / 60).toFixed(1) + " mins";
    } else {
      playtime_td.innerText =
        (this.playtimeInSeconds / 3600).toFixed(1) + " hours";
    }

    gamesCompleted_td.innerText = this.gamesCompleted;
    gamesAbandoned_td.innerText = this.gamesAbandoned;
    gamesDisqualified_td.innerText = this.gamesDisqualified;
    gamesCheated_td.innerText = this.gamesCheated;

    //console.log("Rendered all statistical table values");
  }

  getFormattedPercentageValueString(value) {
    if (value === "---") return value;
    return `${value}%`;
  }

  setBoolValue(key_str, boolValue) {
    localStorage.setItem(key_str, `${boolValue}`);
  }

  toggleIsHiddenStoredBoolValue(key_str, element) {
    if (element.classList.contains("hidden")) {
      userStorage.setBoolValue(key_str, true);
    } else {
      userStorage.setBoolValue(key_str, false);
    }
  }

  retrieveAndApplyPlayPanelViewPreferences() {
    const isSettingsMenuHidden_str = localStorage.getItem(
      "isSettingsMenuHidden"
    );
    if (isSettingsMenuHidden_str != null) {
      const isSettingsMenuHidden_bool = parseBool(isSettingsMenuHidden_str);
      this.setHiddenClassList(settingsMenu_div, isSettingsMenuHidden_bool);
      this.setToggleViewButtonInnerText(
        toggleViewSettings_button,
        isSettingsMenuHidden_bool
      );
    }

    const isGameStatisticsHidden_str = localStorage.getItem(
      "isGameStatisticsHidden"
    );
    if (isGameStatisticsHidden_str != null) {
      const isGameStatisticsHidden_bool = parseBool(isGameStatisticsHidden_str);
      this.setHiddenClassList(
        gameStatistics_table,
        isGameStatisticsHidden_bool
      );
      this.setToggleViewButtonInnerText(
        toggleViewGameStatistics_button,
        isGameStatisticsHidden_bool
      );
    }

    const isMistakeAnalysisHidden_str = localStorage.getItem(
      "isMistakeAnalysisHidden"
    );
    if (isMistakeAnalysisHidden_str != null) {
      const isMistakeAnalysisHidden_bool = parseBool(
        isMistakeAnalysisHidden_str
      );
      this.setHiddenClassList(
        analyzedExpression_div,
        isMistakeAnalysisHidden_bool
      );
      this.setToggleViewButtonInnerText(
        toggleViewMistakeAnalysis_button,
        isMistakeAnalysisHidden_bool
      );
    }
  }

  retrieveAndApplyYourStatisticsPanelViewPreferences() {
    const isWpmStatisticsHidden_str = localStorage.getItem(
      "isWpmStatisticsHidden"
    );
    if (isWpmStatisticsHidden_str != null) {
      const isWpmStatisticsHidden_bool = parseBool(isWpmStatisticsHidden_str);
      this.setHiddenClassList(wpmStatistics_table, isWpmStatisticsHidden_bool);
      this.setToggleViewButtonInnerText(
        toggleViewWpmStatistics_button,
        isWpmStatisticsHidden_bool
      );
    }

    const isAccuracyStatisticsHidden_str = localStorage.getItem(
      "isAccuracyStatisticsHidden"
    );
    if (isAccuracyStatisticsHidden_str != null) {
      const isAccuracyStatisticsHidden_bool = parseBool(
        isAccuracyStatisticsHidden_str
      );
      this.setHiddenClassList(
        accuracyStatistics_table,
        isAccuracyStatisticsHidden_bool
      );
      this.setToggleViewButtonInnerText(
        toggleViewAccuracyStatistics_button,
        isAccuracyStatisticsHidden_bool
      );
    }

    const isParticipationStatisticsHidden_str = localStorage.getItem(
      "isParticipationStatisticsHidden"
    );
    if (isParticipationStatisticsHidden_str != null) {
      const isParticipationStatisticsHidden_bool = parseBool(
        isParticipationStatisticsHidden_str
      );
      this.setHiddenClassList(
        participationStatistics_table,
        isParticipationStatisticsHidden_bool
      );
      this.setToggleViewButtonInnerText(
        toggleViewParticipationStatistics_button,
        isParticipationStatisticsHidden_bool
      );
    }
  }

  setHiddenClassList(element, boolValue) {
    if (boolValue) {
      element.classList.add("hidden");
    } else {
      element.classList.remove("hidden");
    }
  }

  setToggleViewButtonInnerText(
    element_button,
    isCorrespondingElementHidden_bool
  ) {
    if (isCorrespondingElementHidden_bool) {
      element_button.innerText = "Show";
    } else {
      element_button.innerText = "Hide";
    }
  }

  removeStatisticialItemsFromStorage() {
    const keys = [
      "wpmLastGame",
      "wpmLastTenGames",
      "wpmAverageToDate",
      "wpmAllTimeBest",
      "accuracyLastGame",
      "accuracyLastTenGames",
      "accuracyAverageToDate",
      "accuracyAllTimeBest",
      "playtimeInSeconds",
      "gamesCompleted",
      "gamesAbandoned",
      "gamesDisqualified",
      "gamesCheated",
    ];

    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  }
}

const roundFloat = (number, decimalPlaces) => {
  return parseFloat(number.toFixed(decimalPlaces));
};
