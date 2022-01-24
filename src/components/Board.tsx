import './Board.scss'
import { useAppSelector } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'

import BoardTile from './BoardTile'
import ResetBoard from './ResetBoard'
import Container from './Container'

const Board = () => {
  const { gameOver, player, tiles } = useAppSelector(state => state.board)

  return (
    <section className="board">
      <Container>
        <div className="board__up-next">
          <span className={`board__icon ${player === 'X' && !gameOver ? 'board__icon--current' : ''} ${player === 'X' && gameOver ? 'board__icon--winner' : ''}`}>
            <MdClose/>
          </span>
          <span className={`board__icon ${player === 'O' && !gameOver ? 'board__icon--current' : ''} ${player === 'O' && gameOver ? 'board__icon--winner' : ''}`}>
            <MdRadioButtonUnchecked/>
          </span>
        </div>
        <div className={gameOver ? "board__grid board__grid--deactivated" : "board__grid"}>
          {tiles.map(({ index, clicked, clickedBy }) => (
            <BoardTile
              key={index}
              index={index}
              clicked={clicked}
              clickedBy={clickedBy}
              player={player}
            />
          ))}
        </div>
        
        <ResetBoard show={gameOver} />
      </Container>
    </section>
  )
}

export default Board