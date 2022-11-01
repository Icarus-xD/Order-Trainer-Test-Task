import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GameStatusType = 'settings' | 'game' | 'final';

export interface GameStatusState {
  status: GameStatusType;
}

export const initialState: GameStatusState = {
  status: 'settings',
};

export const gameStatusSlice = createSlice({
  name: 'gameStatus',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<GameStatusType>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = gameStatusSlice.actions;

export default gameStatusSlice.reducer;