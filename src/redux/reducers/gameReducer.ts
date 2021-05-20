import quotes from '../../resources/quotes.min';
import { lastIndex } from '../../util';
import GameActions, {
  GAME_START,
  GAME_UPDATE,
  GAME_STOP,
} from '../actions/gameActions';
import Game from '../interfaces/Game';
import GameTextCharacter from '../interfaces/GameTextCharacter';

const initialState: Game = {
  isRunning: false,
  stopCode: null,
  startTime: null,
  stopTime: null,
  textCharacters: [],
  inputValue: '',
  wordsCompletedCount: null,
  totalCharacterInputs: null,
  totalMistakeCount: null,
  completedCount: 0,
};

const gameReducer = (state = initialState, action: GameActions): Game => {
  switch (action.type) {
    case GAME_START: {
      return {
        isRunning: true,
        stopCode: null,
        startTime: Date.now(),
        stopTime: null,
        textCharacters: getGameTextCharacters(),
        inputValue: '',
        wordsCompletedCount: 0,
        totalCharacterInputs: 0,
        totalMistakeCount: 0,
        completedCount: state.completedCount,
      };
    }
    case GAME_UPDATE: {
      const updatedTextCharacters = getUpdatedGameTextCharacters(
        state.textCharacters,
        action.payload.inputValue
      );
      return {
        isRunning: true,
        stopCode: null,
        startTime: state.startTime,
        stopTime: null,
        textCharacters: updatedTextCharacters,
        inputValue: action.payload.inputValue,
        wordsCompletedCount: getWordsCompletedCount(updatedTextCharacters),
        totalCharacterInputs: getTotalCharacterInputs(
          state.totalCharacterInputs,
          state.inputValue.length,
          action.payload.inputValue.length
        ),
        totalMistakeCount: getTotalMistakeCount(updatedTextCharacters),
        completedCount: state.completedCount,
      };
    }
    case GAME_STOP: {
      const updatedTextCharacters = getUpdatedGameTextCharacters(
        state.textCharacters,
        action.payload.inputValue
      );
      return {
        isRunning: false,
        stopCode: action.payload.stopCode,
        startTime: state.startTime,
        stopTime: Date.now(),
        textCharacters: updatedTextCharacters,
        inputValue: '',
        wordsCompletedCount: getWordsCompletedCount(updatedTextCharacters),
        totalCharacterInputs: getTotalCharacterInputs(
          state.totalCharacterInputs,
          state.inputValue.length,
          action.payload.inputValue.length
        ),
        totalMistakeCount: getTotalMistakeCount(updatedTextCharacters),
        completedCount: state.completedCount + 1,
      };
    }
    default: {
      return state;
    }
  }
};

//#region GAME_START functions

const getGameTextCharacters = () => {
  const gameText = getQuote();
  const gameTextCharacters: GameTextCharacter[] = [];
  for (let i = 0; i < gameText.length; i++) {
    gameTextCharacters.push({
      value: gameText[i],
      input: null,
      mistakeCount: 0,
      isCompleted: false,
    });
  }
  return gameTextCharacters;
};

const getQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote.content;
};

//#endregion

//#region GAME_UPDATE/GAME_STOP functions

const getUpdatedGameTextCharacters = (
  gameTextCharacters: GameTextCharacter[],
  inputValue: string
) => {
  let newGameTextCharacters = {
    ...gameTextCharacters,
  };

  let indexOfFirstIncompleteGameTextCharacter =
    getIndexOfFirstIncompleteGameTextCharacter(newGameTextCharacters);

  setInputProperyToNullForGameTextCharactersFromIndex(
    newGameTextCharacters,
    indexOfFirstIncompleteGameTextCharacter
  );

  updateInputPropertyForIncompleteGameTextCharacters(
    newGameTextCharacters,
    indexOfFirstIncompleteGameTextCharacter,
    inputValue
  );

  return newGameTextCharacters;
};

const getIndexOfFirstIncompleteGameTextCharacter = (
  gameTextCharacters: GameTextCharacter[]
) => {
  let i = 0;
  while (gameTextCharacters[i].isCompleted) {
    i++;
  }
  return i;
};

const setInputProperyToNullForGameTextCharactersFromIndex = (
  gameTextCharacters: GameTextCharacter[],
  index: number
) => {
  for (let i = index; i < gameTextCharacters.length; i++) {
    gameTextCharacters[i].input = null;
  }
};

const updateInputPropertyForIncompleteGameTextCharacters = (
  gameTextCharacters: GameTextCharacter[],
  indexOfFirstIncompleteCharacter: number,
  inputValue: string
) => {
  for (
    let i = 0, j = indexOfFirstIncompleteCharacter;
    i < inputValue.length;
    i++
  ) {
    if (j < lastIndex(gameTextCharacters)) {
      gameTextCharacters[j].input = inputValue[i];
      j++;
    } else if (gameTextCharacters[j].input === null) {
      gameTextCharacters[j].input = inputValue[i];
    } else {
      console.log(gameTextCharacters[j]);
      gameTextCharacters[j].input += inputValue[i];
    }
  }
};

const getWordsCompletedCount = (gameTextCharacters: GameTextCharacter[]) => {
  let wordsCompletedCount = 0;
  let i = 0;
  while (gameTextCharacters[i].isCompleted) {
    if (gameTextCharacters[i].value === ' ') {
      wordsCompletedCount++;
    }
    i++;
  }
  return wordsCompletedCount;
};

const getTotalCharacterInputs = (
  currentTotal: number | null,
  oldInputValueLength: number,
  newInputValueLength: number
) => {
  if (currentTotal === null) {
    return null;
  }
  return oldInputValueLength - newInputValueLength;
};

const getTotalMistakeCount = (gameTextCharacters: GameTextCharacter[]) => {
  let count = 0;
  gameTextCharacters.forEach((character) => {
    count += character.mistakeCount;
  });
  return count;
};

//#endregion

export default gameReducer;
