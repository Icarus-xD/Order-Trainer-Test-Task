import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameOverModalWrapper, ModalOverlay, PrimaryButton } from '../assets/styledComponents';
import { setStatus } from '../store/gameStatusSlice';
import { RootState } from '../store/store';

const GameOverModal: FC = () => {

  const { gameStatus } = useSelector((state: RootState) => ({
    gameStatus: state.gameStatus.status,
  }));

  const dispatch = useDispatch();

  return (
    <ModalOverlay>
      <GameOverModalWrapper>
        <h2>Победа!</h2>
        <p>Молодец! Ты успешно справился с заданием!</p>
        <PrimaryButton onClick={() => setStatus('settings')}>Заново</PrimaryButton>
      </GameOverModalWrapper>
    </ModalOverlay>
  );
};

export default GameOverModal;