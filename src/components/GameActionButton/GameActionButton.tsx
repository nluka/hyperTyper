import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GAME_STOP_CODE from '../../GameStopCode';
import {
  gameStartActionCreator,
  gameStopActionCreator,
} from '../../redux/gameSlice';
import { State } from '../../redux/interfaces/State';
import './GameActionButton.css';

interface GameActionButtonProps {}

const GameActionButton = (props: GameActionButtonProps) => {
  const [innerText, setInnerText] = useState('Start');
  const game = useSelector((state: State) => state.game);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!game.isRunning) {
      dispatch(gameStartActionCreator([]));
      setInnerText('Abort');
    } else {
      dispatch(gameStopActionCreator(GAME_STOP_CODE.aborted));
      setInnerText('Start');
    }
  };

  return (
    <button id='gameActionButton' onClick={handleClick}>
      {innerText}
    </button>
  );
};

export default GameActionButton;
