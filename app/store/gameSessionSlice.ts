import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GameSessionList =  string[] | number[];

export interface GameSessionState {
  initialList: GameSessionList;
  correctList: GameSessionList;
  currentList: (string | null)[] | (number | null)[];
}

export const initialState: GameSessionState = {
  initialList: [],
  correctList: [],
  currentList: [],
};

export const gameSessionSlice = createSlice({
  name: 'gameSession',
  initialState,
  reducers: {
    setCurrentList: (state, action: PayloadAction<GameSessionList>) => {
      state.currentList = action.payload;
    },
  },
});

export const { setCurrentList } = gameSessionSlice.actions;

export default gameSessionSlice.reducer;