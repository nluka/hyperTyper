import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameTextCharacter from '../interfaces/GameTextCharacter';
import { lastIndex } from '../util';
import type { RootState } from './store';

interface GameState {
  isRunning: boolean;
  stopCode: null | string;
  startTime: null | number;
  stopTime: null | number;
  gameTextCharacters: GameTextCharacter[];
  totalCharacterInputs: null | number;
  totalMistakeCount: null | number;
  completedCount: number;
}

interface GameUpdatePayload {
  event: KeyboardEvent;
  inputValue: string;
}

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

const initialState: GameState = {
  isRunning: false,
  stopCode: null,
  startTime: null,
  stopTime: null,
  gameTextCharacters: [],
  totalCharacterInputs: null,
  totalMistakeCount: null,
  completedCount: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<GameTextCharacter[]>) => {
      state.isRunning = true;
      state.stopCode = null;
      state.startTime = Date.now();
      state.gameTextCharacters = action.payload;
      state.totalCharacterInputs = 0;
      state.totalMistakeCount = 0;
    },
    update: (state, action: PayloadAction<GameUpdatePayload>) => {
      state.gameTextCharacters = getGameTextCharacters(
        state.gameTextCharacters,
        action.payload.inputValue
      );
      state.totalCharacterInputs = getTotalCharacterInputs(
        state.totalCharacterInputs,
        action.payload.event
      );
      state.totalMistakeCount = getTotalMistakeCount(state.gameTextCharacters);
    },
    stop: (state, action: PayloadAction<string>) => {
      state.isRunning = false;
      state.stopCode = action.payload;
      state.stopTime = Date.now();
    },
  },
});

const getGameTextCharacters = (
  gameTextCharacters: GameTextCharacter[],
  inputValue: string
) => {
  let newGameTextCharacters = gameTextCharacters;

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
    } else {
      gameTextCharacters[j].input += inputValue[i];
    }
  }
};

const getTotalCharacterInputs = (
  currentTotal: number | null,
  event: KeyboardEvent
) => {
  if (currentTotal === null) {
    return null;
  }
  if (nonCharacterInputKeys.includes(event.key)) {
    return currentTotal;
  }
  return currentTotal + 1;
};

const getTotalMistakeCount = (gameTextCharacters: GameTextCharacter[]) => {
  let count = 0;
  gameTextCharacters.forEach((character) => {
    count += character.mistakeCount;
  });
  return count;
};

export const { start, update, stop } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game.value;

export default gameSlice.reducer;
