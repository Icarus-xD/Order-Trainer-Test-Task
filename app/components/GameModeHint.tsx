import Image from 'next/image';
import { FC } from 'react';
import Arrow from '../assets/ArrowHint.png';
import { GameModeHintWrapper } from '../assets/styledComponents';

interface GameModeHintProps {
  mode: 'ascending' | 'descending';
}

const GameModeHint: FC<GameModeHintProps> = ({ mode }) => {

  const textContent = mode === 'ascending' ? 'По возрастанию' : 'По убыванию';

  return (
    <GameModeHintWrapper mode={mode}>
      <span>{ textContent }</span>
      <Image src={Arrow}alt={textContent} />
    </GameModeHintWrapper>
  );
};

export default GameModeHint;