class GameDirector {
  static STOP_CODES = {
    GAME_COMPLETED: "gameCompleted",
    GAME_ABORTED: "gameAborted",
    INSTANT_DEATH: "instantDeath",
    PLAYER_CHEATED: "playerCheated"
  };

  static gameState = {
    running: false
  };

  static gameText = null;

  static gameResult = {
    netWpm: null,
    mistakeCount: null,
    accuracyPercentage: null
  };

  static addGameInputDuringIdleEventListener() {
    gameInput.clearElementValue();
    gameInput.element.addEventListener("input", GameDirector.gameInputEventDuringIdleHandler);
  }

  static gameInputEventDuringIdleHandler() {
    gameInput.clearElementValue();
  }

  static awaitGameRun() {
    GameDirector.gameState.running = false;
    gameActionButton.enableStartState();
    GameDirector.addGameInputDuringIdleEventListener();
    GameDirector.listenForEnterKeydownEvent();
  }

  static listenForEnterKeydownEvent() {
    html_body.addEventListener("keydown", GameDirector.keydownEventHandler);
  }

  static keydownEventHandler(event) {
    if ((event.key === "Enter") && (document.activeElement === gameInput.element)) {
      GameDirector.runGame();
    }
  }

  static async runGame() {
    if (GameDirector.isGameCurrentlyRunning()) {
      return;
    }
    const wasInitializationSuccessful = await GameDirector.initializeGame();
    if (!wasInitializationSuccessful) {
      return;
    }
    if (Settings.countdown) {
      await gameTimer.countDownFromMs(3000);
    }
    GameDirector.startGame();
  }

  static isGameCurrentlyRunning() {
    return GameDirector.gameState.running;
  }

  static async initializeGame() {
    GameDirector.initialize();
    GameDirector.stopListeningForEnterKeydownEvent();
    gameTimer.clear();
    gameWpmTracker.clear();
    gameActionButton.disableStartState();
    expression.startLoadingState();
    try {
      GameDirector.gameText = await GameDirector.getGameText();
    } catch (error) {
      expression.stopLoadingState();
      if (error === Phrase.NO_ITEM_COLLECTIONS_SELECTED) {
        expression.renderError(Expression.NO_PHRASE_ITEM_COLLECTIONS_SELECTED_TEXT);
      }
      GameDirector.awaitGameRun();
      return false;
    }
    expression.initialize(GameDirector.gameText);
    gameInput.initialize();
    mistakeAnalyzer.initialize(GameDirector.gameText.content.length);
    return true;
  }

  static stopListeningForEnterKeydownEvent() {
    html_body.removeEventListener("keydown", GameDirector.keydownEventHandler);
  }

  static async getGameText() {
    switch (Settings.expressionMode) {
      case Settings.EXPRESSION_MODES.QUOTE:
        return await Quote.get();
      case Settings.EXPRESSION_MODES.PHRASE:
        if (Settings.phraseItemCollections.length === 0) {
          throw Phrase.NO_ITEM_COLLECTIONS_SELECTED;
        }
        return new Phrase();
      default:
        throw `'${Settings.expressionMode}' is not a valid expression mode`;
    }
  }

  static initialize() {
    GameDirector.initializeGameState();
    GameDirector.clearGameResult();
  }

  static initializeGameState() {
    GameDirector.gameState.running = true;
  }

  static clearGameResult() {
    GameDirector.gameResult.netWpm = null;
    GameDirector.gameResult.mistakeCount = null;
    GameDirector.gameResult.accuracyPercentage = null;
  }

  static startGame() {
    expression.setCursorToToFirstCharacter();
    gameInput.setPageFocusToElement();
    GameDirector.removeInputDuringIdleEventListener();
    GameDirector.listenForGameEvent();
    gameTimer.start();
    gameWpmTracker.start();
    gameActionButton.enableAbortState();
  }

  static removeInputDuringIdleEventListener() {
    gameInput.element.removeEventListener("input", GameDirector.gameInputEventDuringIdleHandler);
  }

  static listenForGameEvent() {
    gameInput.element.addEventListener("input", GameDirector.updateGame);
  }

  static updateGame() {
    gameInput.currentCharacterCount = gameInput.completedCharacters.length + gameInput.getElementContentsLength();
    if (GameDirector.didCheatingOccur()) {
      GameDirector.handleCheating();
      return;
    }
    GameDirector.updateCharactersTypedCount();
    GameDirector.updateGameState();
    if (GameDirector.isGameCompleted()) {
      GameDirector.stopGame(GameDirector.STOP_CODES.GAME_COMPLETED);
    }
  }

  static didCheatingOccur() {
    return (gameInput.currentCharacterCount - gameInput.previousCharacterCount) > 1;
  }

  static handleCheating() {
    GameDirector.stopGame(GameDirector.STOP_CODES.PLAYER_CHEATED);
  }

  static updateCharactersTypedCount() {
    if ((gameInput.currentCharacterCount - gameInput.previousCharacterCount) === 1) {
      gameInput.charactersTypedCount++;
    }
  }

  static setExpressionSpansForAnyDeletedCharactersToIncompleted() {
    const numberOfCharactersDeletedThisEvent = gameInput.previousCharacterCount - gameInput.currentCharacterCount;
    if (numberOfCharactersDeletedThisEvent <= 0) {
      return;
    }
    for (let i = gameInput.currentCharacterCount; i >= gameInput.previousCharacterCount; i--) {
      expression.setSpanElementAsIncompleted(expression.spanElements[i]);
    }
  }

  static updateGameState() {
    expression.clearCursor();
    expression.areThereIncompletedCharacters = false;
    gameInput.containsMistakes = false;
    gameInput.unmarkElementAsIncorrect();

    const characterCountDifference = gameInput.currentCharacterCount - gameInput.previousCharacterCount;
    let numberOfCharactersDeletedThisEvent = 0;
    if (characterCountDifference < 0) {
      numberOfCharactersDeletedThisEvent += Math.abs(characterCountDifference);
    }
    const indexOfFirstSpanElementThatCouldHaveChanged = gameInput.completedCharacters.length;
    const indexOfLastSpanElementThatCouldHaveChanged = numberOfCharactersDeletedThisEvent + gameInput.currentCharacterCount;
    const indexOfFinalSpanElement = expression.spanElements.length - 1;
    // Loop through every expression span element whose state could have changed since last update
    for (let i = indexOfFirstSpanElementThatCouldHaveChanged; (i <= indexOfLastSpanElementThatCouldHaveChanged) && (i <= indexOfFinalSpanElement); i++) {
      const spanElement = expression.spanElements[i];
      const character = gameInput.getElementContentsAsArray()[i - gameInput.completedCharacters.length];
      const isThereMatchingInputForSpan = (character !== undefined && character !== null);
      const isInputtedCharacterCorrect = (character === spanElement.innerText);
      if (!isThereMatchingInputForSpan) { // || expression.isElementNullSpan(spanElement)
        GameDirector.handleNoMatchingInput(spanElement);
      } else if (!isInputtedCharacterCorrect) {
        GameDirector.handleIncorrectInput(character, spanElement, i);
        if (Settings.instantDeath) {
          GameDirector.handleInstantDeath();
          return;
        }
      } else {
        GameDirector.handleCorrectInput(spanElement);
      }
    }

    gameInput.previousCharacterCount = gameInput.currentCharacterCount;
    gameInput.updateCompletedCharacters();
  }

  static handleNoMatchingInput(spanElement) {
    if (!expression.isElementNullSpan(spanElement)) {
      expression.areThereIncompletedCharacters = true;
    }
    expression.setElementAsIncompleted(spanElement);
    expression.removeElementLabelMistake(spanElement);
    if (!expression.isCursorSet()) {
      expression.setCursorTo(spanElement);
    }
  }

  static handleIncorrectInput(characterInputted, spanElement, spanElementIndex) {
    expression.setElementAsIncorrect(spanElement);
    gameInput.containsMistakes = true;
    gameInput.markElementAsIncorrect();
    if (expression.isElementLabeledAsMistake(spanElement)) {
      return;
    }
    gameInput.totalMistakeCount++;
    expression.labelElementAsMistake(spanElement);
    if (!expression.isElementNullSpan(spanElement)) {
      mistakeAnalyzer.addMistake(spanElementIndex, characterInputted);
    }
  }

  static handleInstantDeath() {
    Sound.playEffect("instantDeath");
    GameDirector.stopGame(GameDirector.STOP_CODES.INSTANT_DEATH);
  }

  static handleCorrectInput(spanElement) {
    expression.setElementAsCorrect(spanElement);
  }

  static isGameCompleted() {
    return (!gameInput.containsMistakes) && (!expression.areThereIncompletedCharacters);
  }

  static stopGame(stopCode) {
    gameTimer.stop();
    gameWpmTracker.stop();
    gameActionButton.disableAbortState();
    expression.clearCursor();
    expression.makeSelectable();
    GameDirector.stopListeningForGameEvent();
    gameInput.cleanup();
    GameDirector.performOperationsSpecificToStopCode(stopCode);
    if (Settings.trackStatistics) {
      StatisticsStorage.incrementPlaytimeInSecondsBy(gameTimer.timeElapsedInSeconds);
    }
    GameDirector.awaitGameRun();
  }

  static stopListeningForGameEvent() {
    gameInput.element.removeEventListener("input", GameDirector.updateGame);
  }

  static performOperationsSpecificToStopCode(stopCode) {
    switch (stopCode) {

      case GameDirector.STOP_CODES.GAME_COMPLETED: {
        GameDirector.updateGameResult();
        gameStatisticsTable.updateForGameCompletion(
          {
            wordsPerMinute: this.gameResult.netWpm,
            accuracyPercentage: this.gameResult.accuracyPercentage,
            textLength: this.gameText.content.length,
            timeElapsedInSeconds: gameTimer.timeElapsedInSeconds
          }
        );
        mistakeAnalyzer.render(this.gameText.content, gameInput.totalMistakeCount);
        if (Settings.trackStatistics) {
          StatisticsStorage.updateStatisticsSpecificToGameCompletion(
            GameDirector.gameResult.netWpm, GameDirector.gameResult.accuracyPercentage
          );
        }
        return;
      }

      case GameDirector.STOP_CODES.GAME_ABORTED: {
        gameTimer.clear();
        gameWpmTracker.clear();
        expression.setDefault();
        if (Settings.trackStatistics) {
          StatisticsStorage.incrementCount(StatisticsStorage.KEYS.GAMES_ABORTED);
        }
        return;
      }

      case GameDirector.STOP_CODES.INSTANT_DEATH: {
        gameInput.showDisqualificationPlaceholderText();
        if (Settings.trackStatistics) {
          StatisticsStorage.incrementCount(StatisticsStorage.KEYS.GAMES_DISQUALIFIED);
        }
        return;
      }

      case GameDirector.STOP_CODES.PLAYER_CHEATED: {
        gameTimer.clear();
        gameWpmTracker.clear();
        expression.renderError(Expression.CHEATING_TEXT);
        if (Settings.trackStatistics) {
          StatisticsStorage.incrementCount(StatisticsStorage.KEYS.GAMES_CHEATED);
        }
        return;
      }

    }
  }

  static updateGameResult() {
    GameDirector.gameResult.netWpm = GameArithmetic.calculateNetWordsPerMinute(GameDirector.gameText.content.length, gameTimer.timeElapsedInSeconds);
    GameDirector.gameResult.mistakeCount = gameInput.totalMistakeCount;
    GameDirector.gameResult.accuracyPercentage = GameArithmetic.calculateAccuracyPercentage(
      GameDirector.gameText.content.length, gameInput.charactersTypedCount, gameInput.totalMistakeCount
    );
  }
}