import React from 'react';
import './GameText.css';

interface GameTextProps {}

const GameText = (props: GameTextProps) => {
  return (
    <div id='gameTextDiv'>
      Click the 'Start' button or click the input box below and press 'Enter' to
      start.
    </div>
  );
};

export default GameText;
