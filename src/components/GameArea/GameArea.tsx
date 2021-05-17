import React from 'react';
import GameInput from '../GameInput/GameInput';
import GameText from '../GameText/GameText';
import GameTimer from '../GameTimer/GameTimer';
import GameWpmTracker from '../GameWpmTracker/GameWpmTracker';
import Panel from '../Panel/Panel';

const GameArea = () => {
  return (
    <section data-name='GameArea'>
      <Panel hasHeading={false}>
        <GameTimer />
        <GameWpmTracker />
        <GameText />
        <GameInput />
      </Panel>
    </section>
  );
};

export default GameArea;
