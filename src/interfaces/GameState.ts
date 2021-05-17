import GameTextCharacter from './GameTextCharacter';

export default interface GameState {
  isGameRunning: Boolean;
  setIsGameRunning?: Function;
  completedCount: Number;
  gameTextCharacters: GameTextCharacter[];
}
