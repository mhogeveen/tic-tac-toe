import './Board.scss'
import { useAppSelector } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'

import BoardTile from './BoardTile'
import ResetBoard from './ResetBoard'
import Container from './Container'

const Board = () => {
  const board = useAppSelector(state => state.board)

  return (
    <section className="board">
      <Container>
        <div className="board__up-next">
          <span className={`board__icon ${board.player === 'X' && !victoryState.gameOver ? 'board__icon--current' : ''} ${victoryState.victoriousPlayer === 'X' ? 'board__icon--winner' : ''}`}>
            <MdClose/>
          </span>
          <span className={`board__icon ${board.player === 'O' && !victoryState.gameOver ? 'board__icon--current' : ''} ${victoryState.victoriousPlayer === 'O' ? 'board__icon--winner' : ''}`}>
            <MdRadioButtonUnchecked/>
          </span>
        </div>
        <div className={victoryState.gameOver ? "board__grid board__grid--deactivated" : "board__grid"}>
          {board.tiles.map(({ index, clicked, clickedBy }) => (
            <BoardTile
              key={index}
              index={index}
              clicked={clicked}
              clickedBy={clickedBy}
              player={board.player}
            />
          ))}
        </div>
        
        <ResetBoard show={board.gameOver} />
      </Container>
    </section>
  )
}

export default Board