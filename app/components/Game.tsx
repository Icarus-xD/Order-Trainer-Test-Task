import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { DragObjectsWrapper, DragPlace, DragPlaceWrapper, GameWrapper } from '../assets/styledComponents';
import { RootState } from '../store/store';
import GameModeHint from './GameModeHint';
import GameOverModal from './GameOverModal';

const Game: FC = () => {

  const { gameStatus, gameMode, gameSession } = useSelector((state: RootState) => ({
    gameStatus: state.gameStatus.status,
    gameMode: state.gameSettings.gameMode,
    gameSession: state.gameSession,
  }));

  return (
    <GameWrapper>
      <DragObjectsWrapper>
        {
          gameSession.initialList.map(item => <DragObject value={item}>{ item }</DragObject>)
        }
      </DragObjectsWrapper>
      <GameModeHint mode={gameMode} />
      <DragPlaceWrapper>
        {
          gameSession.correctList.map(item => <DragPlace />)
        }
      </DragPlaceWrapper>
      { gameStatus === 'final' && <GameOverModal />}
    </GameWrapper>
  );
}

export default Game;