import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
