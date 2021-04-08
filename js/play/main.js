const DEFAULT_EXPRESSION_TEXT_CONTENT = expression_div.innerText;
const pageLoader = new Loader();
const userStorage = new UserStorage();
const settings = new Settings();
const sound = new Sound(settings.soundVolume);
const gameTimer = new GameTimer(gameTimer_div);
const gameWpmTracker = new GameWpmTracker(dynamicWpmDisplay_div);
const gameActionButton = new GameActionButton(gameStartAndAbort_button);
const expression = new Expression(expression_div);
const game = new Game(playerText_input);
const visualKeyboard = new VisualKeyboard(visualKeyboard_div);
const gameStatisticsTable = new GameStatisticsTable({
  wpmCell: wpm_td,
  accuracyCell: accuracy_td,
  textLengthCell: textLength_td,
  timeElapsedCell: timeElapsed_td,
});
const mistakeAnalysis = new MistakeAnalysis(analyzedExpression_div);

const loadingAnimationIntervalCallback = () => {
  pageLoader.animateInnerText();
};

pageLoader.intervalId = setInterval(loadingAnimationIntervalCallback, 400);

const playerTextInputDuringIdleCallback = () => {
  playerText_input.value = "";
};

settings.loadAllSavedValuesFromLocalStorage();
userStorage.retrieveAndApplyPlayPanelViewPreferences();
//gameStatisticsTable.renderPreviousValues();
playerText_input.addEventListener("input", playerTextInputDuringIdleCallback);

const main = () => {
  gameActionButton.enableStartState();
  _body.addEventListener("keydown", keydownEventCallback);
};

const keydownEventCallback = (event) => {
  if (event.key === "Enter" && document.activeElement === playerText_input) {
    runGame();
  }
};

const runGame = async () => {
  //console.log("runGame() called, attempting to run game");

  _body.removeEventListener("keydown", keydownEventCallback);
  gameActionButton.disableStartState();

  let generatedExpression = {};

  expression.initLoadingState();

  if (settings.expressionMode === "quote") {
    //console.log("> awaiting a random quote from Expression");
    generatedExpression = await expression.getRandomQuoteObject();
  } else if (settings.expressionMode === "phrase") {
    if (settings.phraseListsEnabledArr.length <= 0) {
      //console.log(
      //"Settings.phraseListsEnabledArr.length =",
      //settings.phraseListsEnabledArr.length
      //);
      alert(
        "'Expression mode' is set to 'Phrase' but no phrase lists are enabled.\nPlease select at least 1 phrase list from 'Settings > Phrase'"
      );
      preventGameStart();
      return;
    }
    //console.log("> getting a random phrase from Expression");
    generatedExpression = expression.getRandomizedPhraseObject();
  } else {
    //console.log(
    //  "> settings.expression mode not valid, returning from runGame()"
    //);
    revertGameStart();
    return;
  }

  expression.clearLoadingState();
  expression.makeUnselectableByUser();
  expression.clearInnerText();
  expression.renderChildSpanTags(generatedExpression.text);

  game.initialize();
  game.expression = generatedExpression;

  mistakeAnalysis.createAndInitNewUserErrorsMap(
    generatedExpression.text.length
  );

  gameWpmTracker._element.innerText = "— WPM";
  playerText_input.focus();

  if (settings.isCountdownEnabled) await gameTimer.countDownFromMs(3000);

  expression.styleSpanAsCurrentChar(
    document.querySelector("#expressionDiv > span")
  );

  game.start();
  playerText_input.removeEventListener(
    "input",
    playerTextInputDuringIdleCallback
  );
  gameTimer.start();
  gameWpmTracker.start();
  gameActionButton.enableAbortState();
};

const revertGameStart = () => {
  _body.addEventListener("keydown", keydownEventCallback);
  gameActionButton.enableStartState();
  expression.clearLoadingState();
  expression._element.innerText = DEFAULT_EXPRESSION_TEXT_CONTENT;
};

const endGame = (exitCode_str) => {
  // called by game.update()

  gameTimer.stop();
  gameWpmTracker.stop();
  gameActionButton.disableAbortState();
  expression.makeSelectableByUser();
  game.cleanup();

  switch (exitCode_str) {
    case "completed":
      game.end();
      gameStatisticsTable.setWpmCellInnerText(game.result.wpm, {
        decimalPlaces: 1,
      });
      gameStatisticsTable.setAccuracyCellInnerText(game.result.accuracy, {
        decimalPlaces: 1,
      });
      gameStatisticsTable.setTextLengthCharsCellInnerText(
        game.expression.text.length,
        {
          decimalPlaces: 0,
        }
      );
      gameStatisticsTable.setTimeElapsedCellInnerText(
        gameTimer.timeElapsedInSeconds,
        {
          decimalPlaces: 2,
        }
      );
      gameStatisticsTable.setMostRecentTextLengthStoredValueTo(
        game.expression.text.length
      );
      gameStatisticsTable.setMostRecentTimeElapsedStoredValueTo(
        gameTimer.timeElapsedInSeconds
      );
      mistakeAnalysis.renderAnalyzedExpression(game.input.numOfMistakesMade);
      //console.log("MistakeAnalysis map =", mistakeAnalysis.userErrorsMap);
      if (!settings.isResultTrackingEnabled) break;
      userStorage.updateWpmAndAccuracyStatisticalValues();
      userStorage.incrementValueOf("gamesCompleted");
      break;
    case "aborted":
      game.abort();
      gameTimer._element.innerText = "--:--";
      gameWpmTracker._element.innerText = "— WPM";
      expression_div.innerText = DEFAULT_EXPRESSION_TEXT_CONTENT;
      if (!settings.isResultTrackingEnabled) break;
      userStorage.incrementValueOf("gamesAbandoned");
      break;
    case "deathTriggered":
      game.kill();
      gameWpmTracker._element.innerText = "— WPM";
      if (!settings.isResultTrackingEnabled) break;
      userStorage.incrementValueOf("gamesDisqualified");
      break;
    case "disqualified":
      game.disqualify();
      // always track when the user cheated, even if stat tracking is off :D
      userStorage.incrementValueOf("gamesCheated");
      break;
  }

  if (settings.isResultTrackingEnabled) {
    userStorage.incrementPlaytimeValueBy(gameTimer.timeElapsedInSeconds);
  }

  playerText_input.addEventListener("input", playerTextInputDuringIdleCallback);

  main();
};

main();
pageLoader.removeOverlay();
