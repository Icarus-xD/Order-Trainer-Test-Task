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
      state.currentList = new Array(state.initialList.length).fill(null);
      state.correctList = list.sort(); 
      if (action.payload.mode === 'descending') {
        state.correctList.reverse();
      }
    },

    setCurrentListItem: (state, action: PayloadAction<{value: string | number, index: number}>) => {
      const newList = [...state.currentList];
      newList[action.payload.index] = action.payload.value;
      state.currentList = newList as (string | null)[] | (number | null)[];
    },

    deleteInitialStateItem: (state, action: PayloadAction<string | number>) => {
      state.initialList = state.initialList.filter(item => item !== action.payload);
    },
  },
});

export const { setCurrentListItem , setInitialList, deleteInitialStateItem } = gameSessionSlice.actions;

export default gameSessionSlice.reducer;