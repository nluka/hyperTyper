import GameStopActionPayload from '../interfaces/GameStopActionPayload';
import GameUpdateActionPayload from '../interfaces/GameUpdateActionPayload';

export const GAME_START = 'game/start';
export const GAME_UPDATE = 'game/update';
export const GAME_STOP = 'game/stop';

interface GameStartAction {
  type: typeof GAME_START;
}
export const gameStartActionCreator = (): GameStartAction => {
  return {
    type: GAME_START,
  };
};

interface GameUpdateAction {
  type: typeof GAME_UPDATE;
  payload: GameUpdateActionPayload;
}
export const gameUpdateActionCreator = (
  payload: GameUpdateActionPayload
): GameUpdateAction => {
  return {
    type: GAME_UPDATE,
    payload,
  };
};

interface GameStopAction {
  type: typeof GAME_STOP;
  payload: GameStopActionPayload;
}
export const gameStopActionCreator = (
  payload: GameStopActionPayload
): GameStopAction => {
  return {
    type: GAME_STOP,
    payload,
  };
};

type GameActions = GameStartAction | GameUpdateAction | GameStopAction;

export default GameActions;
