import createBoard from '../utils/createBoard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface BoardTile {
  x: number;
  y: number;
  clicked: boolean;
  clickedBy: string | null;
}

// Define the initial state using that type
const initialState: BoardTile[] = createBoard(3);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    
  }
})

export const {  } = boardSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.board.values

export default boardSlice.reducer