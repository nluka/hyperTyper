import React from 'react';
import GameHeader from '../GameHeader/GameHeader';
import GameInput from '../GameInput/GameInput';
import GameText from '../GameText/GameText';
import Panel from '../Panel/Panel';

const GameArea = () => {
  return (
    <section data-name='GameArea'>
      <Panel hasHeading={false} classes='transparent'>
        <GameHeader />
        <GameText />
        <GameInput />
      </Panel>
    </section>
  );
};

export default GameArea;
