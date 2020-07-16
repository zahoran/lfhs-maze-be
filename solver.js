const solve = (maze) => {
  let solved = false;
  const solution = [];
  const traverse = (row, column) => {
    if (solved) {
      return;
    }
    if (maze[row][column] === 'E') {
      solution.push({x: row, y: column});
      console.log('We solved the maze at ( ' + row + ', ' + column + ')');
      solved = true;
    } else if (maze[row][column] === '*' || maze[row][column] === 'S') {
      if (!isDeadEnd(row, column)) {
        solution.push({x: row, y: column});
        maze[row][column] = 'X';
        if (row < maze.length - 1) {
          traverse(row + 1, column);
        }
        if(column < maze[row].length - 1) {
          traverse(row, column + 1);
        }
        if(row > 0) {
          traverse(row - 1, column);
        }
        if(column > 0) {
          traverse(row, column - 1);
        }
      } else {
        console.log('It was a dead end at', row, column);
        maze[row][column] = 'X';
        while(isDeadEnd(solution[solution.length-1].x, solution[solution.length-1].y)) {
          solution.pop();
        }
      }
    }
  };
  const isDeadEnd = (row, column) => {
    return (column > 0 && (maze[row][column - 1] === '#' || maze[row][column - 1] === 'X')) &&
      ( row > 0 && (maze[row - 1][column] === '#' || maze[row - 1][column] === 'X')) &&
      (maze[row][column + 1] === '#' || maze[row][column + 1] === 'X') &&
      (maze[row + 1][column] === '#' || maze[row + 1][column] === 'X');

  }
  traverse(1, 1);
  return solution;
}

module.exports = {solve}