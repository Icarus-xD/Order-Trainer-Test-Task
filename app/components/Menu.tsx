import { FC } from 'react';
import { MenuWrapper, PrimaryButton } from '../assets/styledComponents';
import GameMode from './GameMode';
import Range from './Range';

const objectsNumber = [2, 3, 4, 5];
const values = ['A', 9, 19, 50, 99, 999];

const Menu: FC = () => {

  return (
    <MenuWrapper>
      <Range title='Кол-во предметов' values={objectsNumber} />
      <Range title='Значения' values={values} />
      <GameMode />
      <PrimaryButton>Играть</PrimaryButton>
    </MenuWrapper>
  );
}

export default Menu;