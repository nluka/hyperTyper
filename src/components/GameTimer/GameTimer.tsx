import React from 'react';
import './GameTimer.css';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

interface GameTimerProps {}

const GameTimer = (props: GameTimerProps) => {
  const isGameRunning = useAppSelector((state) => state.game.isRunning);
  const gameStartDate = useAppSelector((state) => state.game.startDate);
  return <div id='gameTimerDiv'>--:--</div>;
};

export default GameTimer;
