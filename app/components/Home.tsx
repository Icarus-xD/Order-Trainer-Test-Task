import Image from 'next/image';
import { FC, useState } from 'react';
import { AppWrapper } from '../assets/styledComponents';
import Game from './Game';
import Menu from './Menu';
import Background from '../assets/default.png';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '../store/store';

const Home: FC = () => {

  const { gameStatus } = useSelector((state: RootState) => ({
    gameStatus: state.gameStatus.status,
  }));

  // new Audio().play();

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
        style={{
          zIndex: -1,
        }}
      />
    </AppWrapper>
  );
}

export default Home;