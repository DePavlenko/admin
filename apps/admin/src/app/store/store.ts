import { configureStore } from '@reduxjs/toolkit';
import universitiesReducer from './universities/universities.slice';

export const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
