class StatisticsStorage {
  static KEYS = {
    WPM_LAST_GAME: "wpmLastGame",
    WPM_LAST_TEN_GAMES: "wpmLastTenGames",
    WPM_AVERAGE_TO_DATE: "wpmAverageToDate",
    WPM_ALL_TIME_BEST: "wpmAllTimeBest",

    ACCURACY_LAST_GAME: "accuracyLastGame",
    ACCURACY_LAST_TEN_GAMES: "accuracyLastTenGames",
    ACCURACY_AVERAGE_TO_DATE: "accuracyAverageToDate",
    ACCURACY_ALL_TIME_BEST: "accuracyAllTimeBest",

    PLAYTIME_IN_SECONDS: "playtimeInSeconds",
    GAMES_COMPLETED: "gamesCompleted",
    GAMES_ABORTED: "gamesAborted",
    GAMES_DISQUALIFIED: "gamesDisqualified",
    GAMES_CHEATED: "gamesCheated"
  };

  //#region (get statistic from storage if exists) methods

  static getWpmLastGameIfExists(options = { decimalPlaces }) {
    return this.getFloatIfExists(
      this.KEYS.WPM_LAST_GAME,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getWpmLastTenGamesIfExists(options = { decimalPlaces }) {
    return this.getArrayAverageFloatIfExists(
      this.KEYS.WPM_LAST_TEN_GAMES,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getWpmAverageToDateIfExists(options = { decimalPlaces }) {
    return this.getFloatIfExists(
      this.KEYS.WPM_AVERAGE_TO_DATE,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getWpmAllTimeBestIfExists(options = { decimalPlaces }) {
    return this.getFloatIfExists(
      this.KEYS.WPM_ALL_TIME_BEST,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getAccuracyLastGameIfExists(options = { decimalPlaces }) {
    return this.getFloatIfExists(
      this.KEYS.ACCURACY_LAST_GAME,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getAccuracyLastTenGamesIfExists(options = { decimalPlaces }) {
    return this.getArrayAverageFloatIfExists(
      this.KEYS.ACCURACY_LAST_TEN_GAMES,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getAccuracyAverageToDateIfExists(options = { decimalPlaces }) {
    return this.getFloatIfExists(
      this.KEYS.ACCURACY_AVERAGE_TO_DATE,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getAccuracyAllTimeBestIfExists(options = { decimalPlaces }) {
    return this.getFloatIfExists(
      this.KEYS.ACCURACY_ALL_TIME_BEST,
      { decimalPlaces: options.decimalPlaces }
    );
  }

  static getPlaytimeInSeconds(options = { decimalPlaces }) {
    return this.getFloat(
      this.KEYS.PLAYTIME_IN_SECONDS,
      options = { decimalPlaces: options.decimalPlaces }
    );
  }

  static getGamesCompleted() {
    return this.getCount(this.KEYS.GAMES_COMPLETED);
  }

  static getGamesAborted() {
    return this.getCount(this.KEYS.GAMES_ABORTED);
  }

  static getGamesDisqualified() {
    return this.getCount(this.KEYS.GAMES_DISQUALIFIED);
  }

  static getGamesCheated() {
    const count = this.getCountIfExists(this.KEYS.GAMES_CHEATED);
    if (count === null) {
      return 0;
    }
    return count;
  }

  //#endregion

  //#region (get value by type) methods

  static getFloat(key, options = { decimalPlaces }) {
    const float = this.getFloatIfExists(key, { decimalPlaces: options.decimalPlaces });
    if (float === null) {
      return 0;
    }
    return float;
  }

  static getFloatIfExists(key, options = { decimalPlaces }) {
    const stringifiedFloat = localStorage.getItem(key);
    if (stringifiedFloat === null) {
      return null;
    }
    return roundFloat(parseFloat(stringifiedFloat), options.decimalPlaces);
  }

  static getCount(key) {
    const count = this.getCountIfExists(key);
    if (count === null) {
      return 0;
    }
    return count;
  }

  static getCountIfExists(key) {
    const stringifiedCount = localStorage.getItem(key);
    if (stringifiedCount === null) {
      return null;
    }
    return parseInt(stringifiedCount);
  }

  static getArrayAverageFloatIfExists(key, options = { decimalPlaces }) {
    const stringifiedArray = localStorage.getItem(key);
    if (stringifiedArray === null) {
      return null;
    }
    const array = JSON.parse(stringifiedArray);
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
      arraySum += parseFloat(array[i]);
    }
    return roundFloat(arraySum / array.length, options.decimalPlaces);
  }

  //#endregion

  static updateStatisticsSpecificToGameCompletion(wordsPerMinute, accuracyPercentage) {
    this.setLastGameValue(this.KEYS.WPM_LAST_GAME, wordsPerMinute);
    this.updateLastTenGamesArray(this.KEYS.WPM_LAST_TEN_GAMES, wordsPerMinute);
    this.updateAverageToDateValue(this.KEYS.WPM_AVERAGE_TO_DATE, wordsPerMinute);
    this.updateAllTimeBestValue(this.KEYS.WPM_ALL_TIME_BEST, wordsPerMinute);

    this.setLastGameValue(this.KEYS.ACCURACY_LAST_GAME, accuracyPercentage);
    this.updateLastTenGamesArray(this.KEYS.ACCURACY_LAST_TEN_GAMES, accuracyPercentage);
    this.updateAverageToDateValue(this.KEYS.ACCURACY_AVERAGE_TO_DATE, accuracyPercentage);
    this.updateAllTimeBestValue(this.KEYS.ACCURACY_ALL_TIME_BEST, accuracyPercentage);

    this.incrementCount(this.KEYS.GAMES_COMPLETED);
  }

  //#region (set/update/increment statistic or value) methods

  static setLastGameValue(key, value) {
    // const key = `${key}LastGame`;
    this.setFloat(key, value);
  }

  static setFloat(key, value) {
    localStorage.setItem(key, value.toFixed(LOCAL_STORAGE_FLOAT_DECIMAL_PLACES));
  }

  static updateLastTenGamesArray(key, newValue) {
    // const key = `${key}LastTenGames`;
    const previousStringifiedArray = localStorage.getItem(key);
    if (previousStringifiedArray === null) {
      this.setFloatArray(key, [newValue]);
      return;
    }
    const previousArray = JSON.parse(previousStringifiedArray);
    const newArray = this.getNewLastTenGamesArray(previousArray, newValue);
    this.setFloatArray(key, newArray);
  }

  static getNewLastTenGamesArray(previousArray, newValue) {
    let newArray = [];
    if (previousArray.length < 10) {
      newArray = previousArray;
    } else {
      newArray = previousArray.slice(1, 10); // remove oldest value
    }
    newArray.push(
      roundFloat(newValue, LOCAL_STORAGE_FLOAT_DECIMAL_PLACES)
    );
    return newArray;
  }

  static setFloatArray(key, floatArray) {
    let floatArrayRounded = [];
    for (let i = 0; i < floatArray.length; i++) {
      floatArrayRounded[i] = roundFloat(floatArray[i], LOCAL_STORAGE_FLOAT_DECIMAL_PLACES);
    }
    localStorage.setItem(key, JSON.stringify(floatArrayRounded));
  }

  static updateAverageToDateValue(key, newValue) {
    // const key = `${key}AverageToDate`;
    const previousStringifiedAverage = localStorage.getItem(key);
    if (previousStringifiedAverage === null) {
      this.setFloat(key, newValue);
      return;
    }
    const previousAverage = parseFloat(previousStringifiedAverage);
    const previousGamesCompleted = this.getGamesCompleted();
    //if (previousGamesCompleted === 0) return;
    const newAverage =
      (previousAverage * previousGamesCompleted + newValue) /
      (previousGamesCompleted + 1);
    this.setFloat(key, newAverage);
  }

  static updateAllTimeBestValue(key, newValue) {
    // const key = `${key}AllTimeBest`;
    const previousAllTimeBest = this.getFloatIfExists(key, { decimalPlaces: LOCAL_STORAGE_FLOAT_DECIMAL_PLACES });
    if ((previousAllTimeBest === null) || (newValue > previousAllTimeBest)) {
      this.setFloat(key, newValue);
    }
  }

  static incrementPlaytimeInSecondsBy(seconds) {
    const previousPlaytimeInSeconds = this.getPlaytimeInSeconds({ decimalPlaces: 1 });
    if (previousPlaytimeInSeconds === null) {
      this.setFloat(this.KEYS.PLAYTIME_IN_SECONDS, seconds);
      return;
    }
    this.setFloat(this.KEYS.PLAYTIME_IN_SECONDS, previousPlaytimeInSeconds + seconds);
  }

  static incrementCount(key) {
    const previousCount = this.getCountIfExists(key);
    if (previousCount === null) {
      this.setCount(key, 1);
      return;
    }
    this.setCount(key, previousCount + 1);
  }

  static setCount(key, count) {
    localStorage.setItem(key, count.toFixed(LOCAL_STORAGE_COUNT_DECIMAL_PLACES));
  }

  //#endregion

  static removeAllItems() {
    const keys = Object.values(this.KEYS);
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  }
}