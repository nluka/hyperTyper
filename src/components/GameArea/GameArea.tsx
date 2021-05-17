import React, { useState } from 'react';
import GameState from '../../interfaces/GameState';
import GameHeader from '../GameHeader/GameHeader';
import GameInput from '../GameInput/GameInput';
import GameText from '../GameText/GameText';
import Panel from '../Panel/Panel';

const GameArea = () => {
  const [gameState, setGameState] = useState<GameState>({
    isGameRunning: false,
    completedCount: 0,
    gameTextCharacters: [],
  });

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
