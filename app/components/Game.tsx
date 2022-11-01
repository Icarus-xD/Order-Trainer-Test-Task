import { FC, useState } from 'react';
import { GameWrapper } from '../assets/styledComponents';
import GameModeHint from './GameModeHint';

const Game: FC = () => {

  const [isGameOver, setIsGameOver] = useState<boolean>(false)

  return (
    <GameWrapper>
      <div></div>
      <GameModeHint mode='ascending' />
      <div></div>
    </GameWrapper>
  );
}

export default Game;