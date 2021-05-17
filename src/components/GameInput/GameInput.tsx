import React from 'react';
import './GameInput.css';

const GameInput = () => {
  return (
    <input
      type='text'
      id='gameInput'
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='on'
      spellCheck='false'
    />
  );
};

export default GameInput;
