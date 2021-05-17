import React from 'react';
import GameActionButton from '../GameActionButton/GameActionButton';
import GameTimer from '../GameTimer/GameTimer';
import GameWpmTracker from '../GameWpmTracker/GameWpmTracker';
import './GameHeader.css';

interface GameHeaderProps {}

const GameHeader = (props: GameHeaderProps) => {
  return (
    <div id='gameHeaderDiv'>
      <div id='gameTimerAndWpmTrackerContainerDiv'>
        <GameTimer />
        <GameWpmTracker />
      </div>
      <GameActionButton />
    </div>
  );
};

export default GameHeader;
