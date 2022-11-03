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

  const { objectsCount, objectValues, gameMode } = useSelector((state: RootState) => ({
    objectsCount: state.gameSettings.objectsNumber,
    objectValues: state.gameSettings.objectValues,
    gameMode: state.gameSettings.gameMode,
  }));

  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(setInitialList({
      mode: gameMode, 
      count: objectsCount, 
      valuesRange: objectValues,
    }));
    dispatch(setStatus('game'));
  };

  const changeObjectsNumber = (value: number | string) => {
    dispatch(setObjectsNumber(Number(value)));
  };

  const changeObjectValues = (value: string | number) => {
    dispatch(setObjectValues(value === 'A' ? value : Number(value)));
  };

  return (
    <MenuWrapper>
      <Range title='Кол-во предметов' value={objectsCount} values={objectsNumber} handleChange={changeObjectsNumber} />
      <Range title='Значения' value={objectValues} values={values} handleChange={changeObjectValues} />
      <GameMode />
      <PrimaryButton onClick={handleGameStart}>Играть</PrimaryButton>
    </MenuWrapper>
  );
}

export default Menu;