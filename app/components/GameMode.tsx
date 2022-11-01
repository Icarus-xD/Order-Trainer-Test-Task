import { FC, useState } from 'react';
import { GameModeWrapper, MenuButton } from '../assets/styledComponents';

const GameMode: FC = () => {

  const [isAscending, setIsAscending] = useState<boolean>(true);

  return (
    <GameModeWrapper>
      <MenuButton 
        active={isAscending} 
        onClick={() => setIsAscending(true)}
      >
        По возрастанию
        </MenuButton>
      <MenuButton 
        active={!isAscending} 
        onClick={() => setIsAscending(false)}
      >
        По убыванию
      </MenuButton>
    </GameModeWrapper>
  );
}

export default GameMode;