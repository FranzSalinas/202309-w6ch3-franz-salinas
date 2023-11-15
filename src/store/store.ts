import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../slice/got.slice';

export const store = configureStore({
  reducer: {
    characterState: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
