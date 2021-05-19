import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Game from './interfaces/Game';
import GameTextCharacter from './interfaces/GameTextCharacter';

const initialState: Game = {
  isRunning: false,
  stopCode: null,
  startTime: null,
  stopTime: null,
  gameTextCharacters: [],
  totalCharacterInputs: null,
  totalMistakeCount: null,
  completedCount: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    start: (state: Game, action: PayloadAction<GameTextCharacter[]>) => {
      state.isRunning = true;
      state.stopCode = null;
      state.startTime = Date.now();
      state.gameTextCharacters = action.payload;
      state.totalCharacterInputs = 0;
      state.totalMistakeCount = 0;
    },
    stop: (state: Game, action: PayloadAction<string>) => {
      state.isRunning = false;
      state.stopCode = action.payload;
      state.stopTime = Date.now();
    },
  },
});

export default gameSlice;
export const { start: gameStartActionCreator, stop: gameStopActionCreator } =
  gameSlice.actions;
