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
}

const BoardTile = ({ index, clicked, clickedBy, player, winningTile }: BoardTileProps) => {
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

  return (
    <div className={`board-tile ${clicked ? 'board-tile--clicked' : ''} ${winningTile ? 'board-tile--winning' : ''}`} onClick={handleTileClick}>
      <span className="board-tile__player">{returnPlayerIcon()}</span>
    </div>
  )
}

export default BoardTile