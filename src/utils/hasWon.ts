import { BoardTileInterface } from "../redux/boardSlice"

const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const hasWon = (board: BoardTileInterface[]) => {
  const crossTiles = board.filter(tile => tile.clicked && tile.clickedBy === 'X').map(tile => tile.index)
  const noughtTiles = board.filter(tile => tile.clicked && tile.clickedBy === 'O').map(tile => tile.index)

  let winningIndices: number[] = []

  winStates.forEach(winState => {
    const crossChecker = winState.every(index => crossTiles.includes(index))
    const noughtChecker = winState.every(index => noughtTiles.includes(index))
    if ((crossChecker || noughtChecker) && !winningIndices.length) {
      winningIndices = winState
    }
  })

  return {
    gameOver: winningIndices.length > 0,
    winningTiles: winningIndices,
  }
}

export default hasWon