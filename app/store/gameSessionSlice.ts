import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createInitailList } from '../utils/createInitialList';
import { GameModeType } from './gameSettingsSlice';
import { ObjectValuesType } from './gameSettingsSlice';

export type GameSessionList =  (string | number)[];
export type CurrentListType = (string | null)[] | (number | null)[];
export type InitialListCreation = {
  mode: GameModeType,
  count: number,
  valuesRange: ObjectValuesType,
};


export interface GameSessionState {
  initialList: GameSessionList;
  correctList: GameSessionList;
  currentList: CurrentListType;
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
    setInitialList: (state, action: PayloadAction<InitialListCreation>) => {
      const list = createInitailList(action.payload.count, action.payload.valuesRange);
      state.initialList = list;
      state.correctList = action.payload.mode === 'ascending' 
        ? list.sort()
        : list.sort((a, b) => (a < b ? -1 : 1));
    },
    setCurrentList: (state, action: PayloadAction<CurrentListType>) => {
      state.currentList = action.payload;
    },
  },
});

export const { setCurrentList , setInitialList } = gameSessionSlice.actions;

export default gameSessionSlice.reducer;