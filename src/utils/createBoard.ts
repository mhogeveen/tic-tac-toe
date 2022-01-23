const createBoard = (gridSize: number) => {
  return Array.from({length: gridSize}, (_, index) => ({index, clicked: false, clickedBy: null}));
}

export default createBoard;