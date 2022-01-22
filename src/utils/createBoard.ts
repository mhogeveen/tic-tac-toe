const createBoard = (gridSize: number) => (
  Array.from(
    { length: gridSize }, (_, y) => Array.from(
      { length: gridSize }, (_, x) => ({ x, y, clicked: false, clickedBy: null})
    )
  ).flat(1)
);
export default createBoard;