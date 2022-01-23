import createBoard from '../utils/createBoard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BoardTileInterface {
  index: number;
  clicked: boolean;
  clickedBy: string | null;
}

const initialState: BoardTileInterface[] = createBoard(9);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoardTile: (state, action: PayloadAction<BoardTileInterface>) => {
      state[action.payload.index] = action.payload
    }
  }
})

export const { updateBoardTile } = boardSlice.actions

export default boardSlice.reducer