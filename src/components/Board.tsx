import './Board.scss'
import { useAppSelector } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'

import BoardTile from './BoardTile'
import ResetBoard from './ResetBoard'
import Container from './Container'

const Board = () => {
  const { gameOver, winningTiles, player, tiles, remainingMoves } = useAppSelector(state => state.board)
  const tie = remainingMoves === 0

  const iconClasses = (type: string) => {
    let classes = 'board__icon'
    classes += player === type && !gameOver ? ' board__icon--current' : ''
    classes += player !== type && gameOver ? ' board__icon--winner' : ''
    classes += tie ? ' board__icon--tie' : ''
    return classes
  }

  const gridClasses = () => {
    let classes = 'board__grid'
    classes += gameOver || tie ? ' board__grid--deactivated' : ''
    return classes
  }

  return (
    <section className="board">
      <Container>
        <div className="board__up-next">
          <span className={iconClasses('X')}>
            <MdClose/>
          </span>
          <span className={iconClasses('O')}>
            <MdRadioButtonUnchecked/>
          </span>
        </div>
        <div className={gridClasses()}>
          {tiles.map(({ index, clicked, clickedBy }) => (
            <BoardTile
              key={index}
              index={index}
              clicked={clicked}
              clickedBy={clickedBy}
              player={player}
              winningTile={winningTiles.includes(index)}
              tieTile={tie}
            />
          ))}
        </div>
        
        <ResetBoard show={gameOver || tie} />
      </Container>
    </section>
  )
}

export default Board