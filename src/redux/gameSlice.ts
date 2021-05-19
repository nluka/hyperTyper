import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import quotes from '../resources/quotes';
import { lastIndex } from '../util';
import Game from './interfaces/Game';
import GameTextCharacter from './interfaces/GameTextCharacter';
import GameUpdatePayload from './interfaces/GameUpdateActionPayload';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const nonCharacterInputKeys = [
  // Row 1
  'Escape',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'PrintScreen',
  'ScrollLock',
  'Pause',
  // Row 2
  'Backspace',
  'Insert',
  'Home',
  'PageUp',
  'NumLock',
  // Row 3
  'Tab',
  'Delete',
  'End',
  'PageDown',
  'ArrowUp',
  // Row 4
  'CapsLock',
  'Enter',
  'ArrowLeft',
  'Clear',
  'ArrowRight',
  // Row 5
  'Shift',
  // Row 6
  'Control',
  'Meta',
  'Alt',
  'ContextMenu',
];

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

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state: Game) => {
      state.isRunning = true;
      state.stopCode = null;
      state.startTime = Date.now();
      state.textCharacters = getGameTextCharacters();
      state.wordsCompletedCount = 0;
      state.totalCharacterInputs = 0;
      state.totalMistakeCount = 0;
    },
    update: (state: Game, action: PayloadAction<GameUpdatePayload>) => {
      state.inputValue = action.payload.inputValue;
      const currentState = current(state);
      state.textCharacters = getUpdatedGameTextCharacters(
        currentState.textCharacters,
        action.payload.inputValue
      );
      state.totalCharacterInputs = getTotalCharacterInputs(
        currentState.totalCharacterInputs,
        currentState.inputValue.length,
        action.payload.inputValue.length
      );
      state.totalMistakeCount = getTotalMistakeCount(
        currentState.textCharacters
      );
    },
    stop: (state: Game, action: PayloadAction<string>) => {
      state.isRunning = false;
      state.stopCode = action.payload;
      state.stopTime = Date.now();
      state.wordsCompletedCount = null;
    },
  },
});

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

const getQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote.content;
};

export default gameSlice;
export const {
  start: gameStartAction,
  update: gameUpdateAction,
  stop: gameStopAction,
} = gameSlice.actions;
