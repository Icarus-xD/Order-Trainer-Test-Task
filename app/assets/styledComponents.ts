import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100wh;
  height: 100vh;
  background: url('../../public/backgrounds/default.png');
  z-index: -1;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 700px;
  align-items: center;
  gap: 60px;
  padding: 30px 65px;
  background: #FFF;
  border-radius: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  border: 20px solid transparent;
  border-image: linear-gradient(198.7deg, #7F75F0 -40.02%, #101F32 96.22%);
  border-image-slice: 1;
  z-index: 2;
`;

export const GameModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px
`;

export const RangeWrapper = styled.div`
  disply: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h3 {
    font-size: 32px;
    font-weight: 400;
    color: #423F45;
    margin-bottom: 20px; 
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    color: #4F4B61;
  }

  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    height: 20px;
    background: #FFD748;
    border-radius: 10px
  }

  input[type=range]::-webkit-slider-thumb,
  input[type=range]::-moz-range-thumb,
  input[type=range]::-ms-thumb {
    -webkit-appearance: none !important;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background-color: #104987;
    z-index: 99;
    cursor: pointer;
  }
`;

export const RangeInput = styled.input`
  height: 20px;
  background: #FFD748;
  border-radius: 10px;
`;

export const MenuButton = styled.button<{ active: boolean }>`
  display: block;
  padding: 5px 20px; 
  font-size: 26px;
  font-weight: 700;
  color: #423F45;
  background-color: #FFD748;
  border-radius: 20px;
  border: none;
  opacity: ${props => props.active ? 1 : 0.5}
`;

export const PrimaryButton = styled.button`
  display: block;
  padding: 10px 75px;
  font-size: 32px;
  font-weight: 400;
  background-color: #38DF7A;
  border: none;
  border-radius: 20px;
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100wh;
  height: 100vh;
  padding: 30px 45px;
  background: transparent;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100wh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

export const GameOverModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 700px;
  align-items: center;
  gap: 60px;
  padding: 30px 65px;
  background: #FFF;
  border-radius: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  border: 20px solid transparent;
  border-image: linear-gradient(198.7deg, #7F75F0 - 40.02%, #101F32 96.22%);
  border-image-slice: 1;
  z-index: 6;
`;

export const DragPlaceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: auto;
  height: 80px;
  background-color: #FFD748;
  z-index: 3;
`;

export const DragPlace = styled.div<{ index: number }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
`;

export const DragObjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: none;
`;

export const DragObjectWrapper = styled.div<{ value: number | string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
  border-radius: 50%;
  color: white;
  z-index: 10;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
`;

export const GameModeHintWrapper = styled.div<{ mode: 'ascending' | 'descending' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${props => props.mode === 'ascending' ? 'flex-start' : 'flex-end'};
  flex-direction: ${props => props.mode === 'ascending' ? 'row' : 'row-reverse'};
  z-index: 3;
`;