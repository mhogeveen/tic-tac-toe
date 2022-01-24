import { createSlice } from '@reduxjs/toolkit'

const initialState: string = 'X';

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setNextPlayer: state => state === 'X' ? 'O' : 'X',
    resetPlayer: state => state = 'X',
  }
})

export const { setNextPlayer, resetPlayer } = playerSlice.actions

export default playerSlice.reducer