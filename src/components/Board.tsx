import './Board.scss'
import { useAppSelector } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'

import BoardTile from './BoardTile'
import ResetBoard from './ResetBoard'
import Container from './Container'

const Board = () => {
  const { gameOver, winningTiles, player, tiles } = useAppSelector(state => state.board)

  return (
    <section className="board">
      <Container>
        <div className="board__up-next">
          <span className={`board__icon ${player === 'X' && !gameOver ? 'board__icon--current' : ''} ${player === 'O' && gameOver ? 'board__icon--winner' : ''}`}>
            <MdClose/>
          </span>
          <span className={`board__icon ${player === 'O' && !gameOver ? 'board__icon--current' : ''} ${player === 'X' && gameOver ? 'board__icon--winner' : ''}`}>
            <MdRadioButtonUnchecked/>
          </span>
        </div>
        <div className={`board__grid ${gameOver ? 'board__grid--deactivated' : ''}`}>
          {tiles.map(({ index, clicked, clickedBy }) => (
            <BoardTile
              key={index}
              index={index}
              clicked={clicked}
              clickedBy={clickedBy}
              player={player}
              winningTile={winningTiles.includes(index)}
            />
          ))}
        </div>
        
        <ResetBoard show={gameOver} />
      </Container>
    </section>
  )
}

export default Board