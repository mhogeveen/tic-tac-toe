import './Board.scss'
import { useAppSelector } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'
import BoardTile from './BoardTile'
const Board = () => {
  const boardTiles = useAppSelector(state => state.board)
  return (
    <section className="board">
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
    </section>
  )
}

export default Board