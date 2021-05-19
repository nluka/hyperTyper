import GameTextCharacter from './GameTextCharacter';

export default interface Game {
  isRunning: boolean;
  stopCode: null | string;
  startTime: null | number;
  stopTime: null | number;
  gameTextCharacters: GameTextCharacter[];
  totalCharacterInputs: null | number;
  totalMistakeCount: null | number;
  completedCount: number;
}
