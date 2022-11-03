import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameOverModalWrapper, ModalOverlay, PrimaryButton } from '../assets/styledComponents';
import { setStatus } from '../store/gameStatusSlice';
import { RootState } from '../store/store';

const GameOverModal: FC = () => {

  const dispatch = useDispatch();

  const restartGame = () => {
    dispatch(setStatus('settings'));
  };

  // new Audio().play()

  return (
    <ModalOverlay>
      <GameOverModalWrapper>
        <h2>Победа!</h2>
        <p>Молодец! Ты успешно справился с заданием!</p>
        <PrimaryButton onClick={restartGame}>Заново</PrimaryButton>
      </GameOverModalWrapper>
    </ModalOverlay>
  );
};

export default GameOverModal;