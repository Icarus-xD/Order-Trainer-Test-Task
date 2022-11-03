import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ObjectValuesType = number | 'A';
export type GameModeType = 'ascending' | 'descending';

export interface GameSettingsState {
  objectsNumber: number;
  objectValues: ObjectValuesType;
  gameMode: GameModeType;
}

export const initialState: GameSettingsState = {
  objectsNumber: 2,
  objectValues: 'A',
  gameMode: 'ascending',
};

export const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState,
  reducers: {
    setObjectsNumber: (state, action: PayloadAction<number>) => {
      state.objectsNumber = action.payload;
    },

    setObjectValues: (state, action: PayloadAction<ObjectValuesType>) => {
      state.objectValues = action.payload;
    },

    setGameMode: (state, action: PayloadAction<GameModeType>) => {
      state.gameMode = action.payload;
    },
  }
});

export const { setObjectsNumber, setObjectValues, setGameMode } = gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;