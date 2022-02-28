import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import { authSlice } from './auth'
import { habitSlice } from './habits'

const persistConfig = {
  key: 'root',
  storage
}

const reducers =  combineReducers({
  auth: authSlice.reducer,
  habits: habitSlice.reducer
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers)
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch