import { configureStore } from '@reduxjs/toolkit'
import optionsReducer from './features/options/optionsSlice'

import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistStore} from "redux-persist";

// import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';

export const store = configureStore({
    reducer: {
      options: optionsReducer
    },
  // middleware: getDefaultMiddleware => getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // })
})

// Infer the type of makeStore
// @ts-ignore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// export const persistor = persistStore(store);

