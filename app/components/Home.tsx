import Image from 'next/image';
import { FC, useState } from 'react';
import { AppWrapper } from '../assets/styledComponents';
import Game from './Game';
import Menu from './Menu';
import Background from '../assets/default.png';

const Home: FC = () => {

  const [isGameStarted, setIsGameStarted] = useState<boolean>(true);

  return (
    <AppWrapper>
      {
        isGameStarted
          ? <Game />
          : <Menu />
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