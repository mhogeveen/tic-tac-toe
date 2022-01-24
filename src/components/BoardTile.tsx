import './BoardTile.scss'
import { updateAfterClick } from '../redux/boardSlice'
import { useAppDispatch } from '../redux/hooks'
import { MdClose, MdRadioButtonUnchecked } from 'react-icons/md'

interface BoardTileProps {
  index: number
  clicked: boolean
  clickedBy: string | null
  player: string
}

const BoardTile = ({ index, clicked, clickedBy, player }: BoardTileProps) => {
  const dispatch = useAppDispatch()

  const handleTileClick = () => {
    if (!clicked) {
      dispatch(updateAfterClick({index, clicked: true, clickedBy: player}))
      // dispatch(setNextPlayer())
    }
  }

  const returnPlayerIcon = () => {
    if (!clicked) {
      return player === 'X' ? <MdClose/> : <MdRadioButtonUnchecked/>
    }
    return clickedBy === 'X' ? <MdClose/> : <MdRadioButtonUnchecked/>
  }

  return (
    <div className={clicked ? "board-tile board-tile--clicked" : "board-tile"} onClick={handleTileClick}>
      <span className="board-tile__player">{returnPlayerIcon()}</span>
    </div>
  )
}

export default BoardTile