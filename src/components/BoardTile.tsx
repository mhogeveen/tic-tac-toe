import './BoardTile.scss'
import { updateAfterClick } from '../redux/boardSlice'
import { useAppDispatch } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'

interface BoardTileProps {
  index: number
  clicked: boolean
  clickedBy: string | null
  player: string
  winningTile: boolean
  tieTile: boolean
}

const BoardTile = ({ index, clicked, clickedBy, player, winningTile, tieTile }: BoardTileProps) => {
  const dispatch = useAppDispatch()

  const handleTileClick = () => {
    if (!clicked) {
      dispatch(updateAfterClick({index, clicked: true, clickedBy: player}))
    }
  }

  const returnPlayerIcon = () => {
    if (!clicked) {
      return player === 'X' ? <MdClose/> : <MdRadioButtonUnchecked/>
    }
    return clickedBy === 'X' ? <MdClose/> : <MdRadioButtonUnchecked/>
  }

  const tileClasses = () => {
    let classes = 'board-tile'
    classes += clicked ? ' board-tile--clicked' : ''
    classes += winningTile ? ' board-tile--winning' : ''
    classes += tieTile ? ' board-tile--tie' : ''
    return classes
  }

  return (
    <div className={tileClasses()} onClick={handleTileClick}>
      <span className="board-tile__player">{returnPlayerIcon()}</span>
    </div>
  )
}

export default BoardTile