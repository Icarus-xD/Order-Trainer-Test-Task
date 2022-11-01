import { configureStore, combineReducers } from '@reduxjs/toolkit'
import gameSettingsReducer from './gameSettingsSlice';
import gameSessionReducer from './gameSessionSlice';
import gameStatusReducer from './gameStatusSlice';

export const reducer = combineReducers({
  gameSettings: gameSettingsReducer,
  gameSession: gameSessionReducer,
  gameStatus: gameStatusReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;