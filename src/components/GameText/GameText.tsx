import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import GameTextCharacter from '../../redux/interfaces/GameTextCharacter';
import { State } from '../../redux/interfaces/State';
import './GameText.css';
import { v4 as uuidv4 } from 'uuid';

interface GameTextProps extends StateProps {}

const GameText = (props: GameTextProps) => {
  const [characterElements, setCharacterElements] = useState<JSX.Element[]>([]);

  const defaultText = `Click the 'Start' button or click the input box below and press 'Enter' to start.`;

  useEffect(() => {
    if (props.isGameRunning) {
      setCharacterElements(getCharacterElements(props.characters));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isGameRunning]);

  useEffect(() => {}, [props.characters]);

  const getCharacterElements = (gameTextCharacters: GameTextCharacter[]) => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < gameTextCharacters.length; i++) {
      elements.push(
        <span className={i === 0 ? 'cursor' : ''} key={uuidv4()}>
          {gameTextCharacters[i].value}
        </span>
      );
    }
    return elements;
  };

  return (
    <div id='gameTextDiv'>
      {characterElements.length > 0 ? characterElements : defaultText}
    </div>
  );
};

interface StateProps {
  isGameRunning: boolean;
  characters: GameTextCharacter[];
  inputValue: string;
}

const mapStateToProps = (state: State): StateProps => {
  return {
    isGameRunning: state.game.isRunning,
    characters: state.game.textCharacters,
    inputValue: state.game.inputValue,
  };
};

export default connect(mapStateToProps)(GameText);
