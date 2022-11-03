import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragObjectsWrapper, DragPlaceContainer, GameWrapper } from '../assets/styledComponents';
import { setCurrentListItem, deleteInitialStateItem } from '../store/gameSessionSlice';
import { setStatus } from '../store/gameStatusSlice';
import { RootState } from '../store/store';
import DragObject from './DragObject';
import DragPlace from './DragPlace';
import GameModeHint from './GameModeHint';
import GameOverModal from './GameOverModal';

const Game: FC = () => {

  const dispatch = useDispatch();

  const { gameStatus, gameMode, gameSession } = useSelector((state: RootState) => ({
    gameStatus: state.gameStatus.status,
    gameMode: state.gameSettings.gameMode,
    gameSession: state.gameSession,
  }));

  const [draggedObject, setDraggedObject] = useState<string | number | null>(null);
  const [draggedObjectPlace, setDraggedObjectPlace] = useState<number | null>(null);

  const setCurrentItem = () => {
    if (
      draggedObject !== null && 
      gameSession.correctList.findIndex(i => i === draggedObject) === draggedObjectPlace) 
    {
      dispatch(setCurrentListItem({
        value: draggedObject, 
        index: draggedObjectPlace
      }));

      dispatch(deleteInitialStateItem(draggedObject));

      // new Audio().play()
    } else {
      // new Audio().play()
    }
    
    setDraggedObject(null);
    setDraggedObjectPlace(null);
  };

  useEffect(() => {
    if (!gameSession.initialList.length) {
      dispatch(setStatus('final'));
    }
  }, [gameSession.initialList]);

  return (
    <GameWrapper>
      <DragObjectsWrapper>
        {
          gameSession.initialList.map(item => (
            <DragObject 
              key={item} 
              value={item} 
              setDragged={setDraggedObject}
              setCurrentItem={setCurrentItem}
              draggable 
            />
          ))
        }
      </DragObjectsWrapper>
      <GameModeHint mode={gameMode} />
      <DragPlaceContainer>
        {
          gameSession.correctList.map((item, i) => (
            <DragPlace 
              key={i} 
              index={i} 
              value={gameSession.currentList[i]}
              setDragged={setDraggedObjectPlace}
            />
          ))
        }
      </DragPlaceContainer>
      { gameStatus === 'final' && <GameOverModal />}
    </GameWrapper>
  );
}

export default Game;