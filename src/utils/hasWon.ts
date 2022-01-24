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
  let crossTiles: number[] = []
  let noughtTiles: number[] = []

  const clickedTiles = board.filter(tile => tile.clicked)
  
  clickedTiles.forEach(tile => {
    if (tile.clickedBy === 'X') {
      crossTiles = [...crossTiles, tile.index]
    } else {
      noughtTiles = [...noughtTiles, tile.index]
    }
  })

  let crossChecker = false
  let noughtChecker = false
  let winningIndices: number[] = []

  winStates.forEach(winState => {
    if (!crossChecker && !noughtChecker) {
      crossChecker = winState.every(index => crossTiles.includes(index))
      noughtChecker = winState.every(index => noughtTiles.includes(index))
      winningIndices = winState
    }
  })

  if (crossChecker || noughtChecker) {
    return {
      gameOver: crossChecker || noughtChecker,
      victoriousPlayer: crossChecker ? 'X' : 'O',
      winningIndices
    }
  } else {
    return {
      gameOver: false,
      victoriousPlayer: '',
      winningIndices: []
    }
  }
}

export default hasWon