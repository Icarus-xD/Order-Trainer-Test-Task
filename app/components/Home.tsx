import Image from 'next/image';
import { FC, useState } from 'react';
import { AppWrapper } from '../assets/styledComponents';
import Game from './Game';
import Menu from './Menu';
import Background from '../assets/default.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Home: FC = () => {

  const { gameStatus } = useSelector((state: RootState) => ({
    gameStatus: state.gameStatus.status,
  }));

  return (
    <AppWrapper>
      {
        gameStatus === 'settings'
          ? <Menu />
          : <Game />
      }
      <Image
        layout='fill'
        src={Background}
        alt='background'
      />
    </AppWrapper>
  );
}

export default Home;