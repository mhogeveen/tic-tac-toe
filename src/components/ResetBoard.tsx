import './ResetBoard.scss';

import { resetBoard } from '../redux/boardSlice'
import { useAppDispatch } from '../redux/hooks'

import { MdOutlineReplay } from 'react-icons/md'

interface ResetBoardProps {
  show: boolean
}

const ResetBoard = ({ show }: ResetBoardProps) => {
  const dispatch = useAppDispatch()

  const handleResetClick = () => {
    dispatch(resetBoard())
  }

  return (
    <button className={show ? "reset-board" : "reset-board reset-board--deactivate"} onClick={handleResetClick}>
      Reset game
      <MdOutlineReplay />
    </button>
  )
}

export default ResetBoard