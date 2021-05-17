import React from 'react';
import './GameActionButton.css';

interface GameActionButtonProps {}

const GameActionButton = (props: GameActionButtonProps) => {
  const handleClick = () => {};
  return (
    <button id='gameActionButton' onClick={handleClick}>
      Start
    </button>
  );
};

export default GameActionButton;
