import React, { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/interfaces/State';
import './GameTimer.css';

interface GameTimerProps extends StateProps {}

const GameTimer = (props: GameTimerProps) => {
  const [innerText, setInnerText] = useState('--:--');

  return <div id='gameTimerDiv'>{innerText}</div>;
};

const getSecondsElapsed = (startTime: number | null) => {
  if (startTime === null) {
    return null;
  }
  return parseInt(((Date.now() - startTime) / 1000).toFixed(0));
};

const getFormattedString = (secondsElapsed: number | null) => {
  if (secondsElapsed === null) {
    return '--:--';
  }

  let seconds = secondsElapsed;
  let minutes = 0;
  let hours = 0;
  let string = '';

  while (seconds >= 3600) {
    hours++;
    seconds -= 3600;
  }
  while (seconds >= 60) {
    minutes++;
    seconds -= 60;
  }

  if (hours > 0) {
    string = `${hours}:`;
    if (minutes < 10) {
      string += '0'; // to have h:mm:ss instead of h:m:ss
    }
  }
  string += `${minutes}:`;
  if (seconds < 10) {
    string += '0'; // to have mm:ss instead of mm:s
  }
  string += seconds;

  return string;
};

interface StateProps {
  isGameRunning: boolean;
  startTime: number | null;
}

const mapStateToProps = (state: State): StateProps => {
  return {
    isGameRunning: state.game.isRunning,
    startTime: state.game.startTime,
  };
};

export default connect(mapStateToProps)(GameTimer);
