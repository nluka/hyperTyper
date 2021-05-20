import GameTextCharacter from './GameTextCharacter';

export default interface GameStopActionPayload {
  stopCode: string;
  textCharacters: GameTextCharacter[];
  inputValue: string;
}
