import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './boardSlice'
import playerReducer from './playerSlice'

const store = configureStore({
  reducer: {
    board: boardReducer,
    player: playerReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch