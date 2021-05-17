import React from 'react';
import GameInput from '../GameInput/GameInput';
import GameText from '../GameText/GameText';
import GameTimer from '../GameTimer/GameTimer';
import GameWpmTracker from '../GameWpmTracker/GameWpmTracker';

const GameArea = () => {
  return (
    <>
      <GameTimer />
      <GameWpmTracker />
      <GameText />
      <GameInput />
    </>
  );
};

export default GameArea;
