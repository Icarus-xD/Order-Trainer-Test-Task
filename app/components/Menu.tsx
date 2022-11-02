import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuWrapper, PrimaryButton } from '../assets/styledComponents';
import { setInitialList } from '../store/gameSessionSlice';
import { setObjectsNumber, setObjectValues } from '../store/gameSettingsSlice';
import { setStatus } from '../store/gameStatusSlice';
import { RootState } from '../store/store';
import GameMode from './GameMode';
import Range from './Range';

const objectsNumber = [2, 3, 4, 5];
const values = ['A', 9, 19, 50, 99, 999];

const Menu: FC = () => {

  const { objectsCount, objectValues } = useSelector((state: RootState) => ({
    objectsCount: state.gameSettings.objectValues,
    objectValues: state.gameSettings.objectValues,
  }));

  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(setInitialList({
      mode: 'ascending', 
      count: 2, 
      valuesRange: 9
    }));
    dispatch(setStatus('game'));
  };

  const changeObjectsNumber = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(setObjectsNumber(Number(event.target.value)));
  };

  const changeObjectValues = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(setObjectValues(event.target.value === 'A' ? event.target.value : Number(event.target.value)));
  };

  return (
    <MenuWrapper>
      <Range title='Кол-во предметов' value={objectsCount} values={objectsNumber} onChange={changeObjectsNumber} />
      <Range title='Значения' value={objectValues} values={values} onChange={changeObjectValues} />
      <GameMode />
      <PrimaryButton onClick={handleGameStart}>Играть</PrimaryButton>
    </MenuWrapper>
  );
}

export default Menu;