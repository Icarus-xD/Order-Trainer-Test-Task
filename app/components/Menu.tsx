import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuWrapper, PrimaryButton } from '../assets/styledComponents';
import { setInitialList } from '../store/gameSessionSlice';
import { setStatus } from '../store/gameStatusSlice';
import { RootState } from '../store/store';
import GameMode from './GameMode';
import Range from './Range';

const objectsNumber = [2, 3, 4, 5];
const values = ['A', 9, 19, 50, 99, 999];

const Menu: FC = () => {

  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(setInitialList({
      mode: 'ascending', 
      count: 2, 
      valuesRange: 9
    }));
    dispatch(setStatus('game'));
  };

  return (
    <MenuWrapper>
      <Range title='Кол-во предметов' values={objectsNumber} />
      <Range title='Значения' values={values} />
      <GameMode />
      <PrimaryButton onClick={handleGameStart}>Играть</PrimaryButton>
    </MenuWrapper>
  );
}

export default Menu;