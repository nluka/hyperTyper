import React from 'react';
import './GameInput.css';

interface GameInputProps {}

const GameInput = (props: GameInputProps) => {
  const handleChange = () => {};

  return (
    <input
      type='text'
      id='gameInput'
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='on'
      spellCheck='false'
      onChange={handleChange}
    />
  );
};

export default GameInput;
