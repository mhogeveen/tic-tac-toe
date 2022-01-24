import './Board.scss'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'
import hasWon from '../utils/hasWon'

import BoardTile from './BoardTile'
import ResetBoard from './ResetBoard'
import Container from './Container'

interface VictoryState {
  gameOver: boolean
  victoriousPlayer: string
  winningIndices: number[]
}

const Board = () => {
  const [victoryState, setVictoryState] = useState<VictoryState>({
    gameOver: false,
    victoriousPlayer: '',
    winningIndices: []
  })
  const boardTiles = useAppSelector(state => state.board)
  const player = useAppSelector(state => state.player)

  useEffect(() => {
    setVictoryState(hasWon(boardTiles))
    console.log(victoryState);
  }, [boardTiles])

  return (
    <section className="board">
      <Container>
        <div className="board__up-next">
          <span className={`board__icon ${player === 'X' && !victoryState.gameOver ? 'board__icon--current' : ''} ${victoryState.victoriousPlayer === 'X' ? 'board__icon--winner' : ''}`}>
            <MdClose/>
          </span>
          <span className={`board__icon ${player === 'O' && !victoryState.gameOver ? 'board__icon--current' : ''} ${victoryState.victoriousPlayer === 'O' ? 'board__icon--winner' : ''}`}>
            <MdRadioButtonUnchecked/>
          </span>
        </div>
        <div className={victoryState.gameOver ? "board__grid board__grid--deactivated" : "board__grid"}>
          {boardTiles.map(({ index, clicked, clickedBy }) => (
            <BoardTile
              key={index}
              index={index}
              clicked={clicked}
              clickedBy={clickedBy}
              player={player}
            />
          ))}
        </div>
        
        <ResetBoard show={victoryState.gameOver} />
      </Container>
    </section>
  )
}

export default Board