import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameModeWrapper, MenuButton } from '../assets/styledComponents';
import { setGameMode } from '../store/gameSettingsSlice';
import { RootState } from '../store/store';

const GameMode: FC = () => {

  const dispatch = useDispatch();
  const { gameMode } = useSelector((state: RootState) => ({
    gameMode: state.gameSettings.gameMode,
  }));

  return (
    <GameModeWrapper>
      <MenuButton 
        active={gameMode === 'ascending'} 
        onClick={() => dispatch(setGameMode('ascending'))}
      >
        По возрастанию
        </MenuButton>
      <MenuButton 
        active={gameMode === 'descending'} 
        onClick={() => dispatch(setGameMode('descending'))}
      >
        По убыванию
      </MenuButton>
    </GameModeWrapper>
  );
}

export default GameMode;