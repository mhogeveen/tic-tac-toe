import { createSlice } from '@reduxjs/toolkit'

const initialState: string = 'X';

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setNextPlayer: state => state === 'X' ? 'O' : 'X'
  }
})

export const { setNextPlayer } = playerSlice.actions

export default playerSlice.reducer