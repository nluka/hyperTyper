import GameTextCharacter from './GameTextCharacter';

export default interface GameUpdatePayload {
  inputValue: string;
  textCharacters: GameTextCharacter[];
}
