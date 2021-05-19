import React, { useEffect, useState } from 'react';
import { gameUpdateAction } from '../../redux/gameSlice';
import { connect, useDispatch, useSelector } from 'react-redux';
import './GameInput.css';
import { State } from '../../redux/interfaces/State';

interface GameInputProps extends StateProps {}

const GameInput = (props: GameInputProps) => {
  const [value, setValue] = useState('');
  const textCharacters = useSelector(
    (state: State) => state.game.textCharacters
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.isGameRunning) {
      dispatch(
        gameUpdateAction({
          inputValue: value,
          textCharacters: { ...textCharacters },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    setValue('');
  }, [props.wordsCompletedCount]);

  return (
    <input
      type='text'
      id='gameInput'
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='on'
      spellCheck='false'
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

interface StateProps {
  isGameRunning: boolean;
  wordsCompletedCount: number | null;
}

const mapStateToProps = (state: State): StateProps => {
  return {
    isGameRunning: state.game.isRunning,
    wordsCompletedCount: state.game.wordsCompletedCount,
  };
};

export default connect(mapStateToProps)(GameInput);
