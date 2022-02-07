import {combineReducers, configureStore} from '@reduxjs/toolkit';
import info from './ethersData.reducer';

const rootReducer = combineReducers({
  info,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type Store = ReturnType<typeof rootReducer>;
