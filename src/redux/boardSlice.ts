import createBoard from '../utils/createBoard'
import hasWon from '../utils/hasWon'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BoardTileInterface {
  index: number
  clicked: boolean
  clickedBy: string | null
}

interface BoardInterface {
  remainingMoves: number
  gameOver: boolean
  winningTiles: number[]
  player: string
  tiles: BoardTileInterface[]
}

const initialState: BoardInterface = {
  remainingMoves: 9,
  gameOver: false,
  winningTiles: [],
  player: 'X',
  tiles: createBoard(9),
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateAfterClick: (state, action: PayloadAction<BoardTileInterface>) => {
      state.tiles[action.payload.index] = action.payload
      state.player = state.player === 'X' ? 'O' : 'X'
      state.remainingMoves--

      const winCondition = hasWon(state.tiles)
      state.gameOver = winCondition.gameOver
      state.winningTiles = winCondition.winningTiles
    },
    resetBoard: state => state = initialState
  }
})

export const { updateAfterClick, resetBoard } = boardSlice.actions

export default boardSlice.reducer