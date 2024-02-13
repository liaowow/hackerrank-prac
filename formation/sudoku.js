function printSudokuBoard(board) {
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log('- - - - - - - - - - -');
    }

    for (let j = 0; j < board[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        process.stdout.write(' |');
      }

      process.stdout.write((j === 0 ? '' : ' ') + board[i][j]);
    }

    console.log();
  }
}

function findFirstEmptyCell(board) {
  for (let i = 0 ; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if (board[i][j] == 0){
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function isPossibleValue(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    // Calculate (m,n) so we iterates through the coordinates
    // in the same 3x3 subgrid as the cell at (row, col)
    let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let n = 3 * Math.floor(col / 3) + i % 3;

    // If you're curious, run:
    //   console.log(`(${row}, ${col}) cell ${i} -> (${m}, ${n})`);

    if (board[row][i] === num || board[i][col] === num || board[m][n] === num) {
      return false;
    }
  }
  return true;
}

function findPossibleValues(board, row, col) {
  let results = [];

  for (let num = 1; num <= 9; num++) {
    if (isPossibleValue(board, row, col, num)) {
      results.push(num);
    }
  }

  return results;
}


function solveSudoku(board) {
  let [row, col] = findFirstEmptyCell(board);

  // If there's no empty cells then we're done
  // Why? Because we only ever fill in cells w/ values that are permitted,
  // so if there's no empty cells then they all contain permitted values
  if (row === -1 && col === -1) {
    return true;
  }

  let possibleValues = findPossibleValues(board, row, col);

  for (let val of possibleValues) {
    board[row][col] = val;

    // We can stop as soon as we've found a solution, i.e., an exit
    if (solveSudoku(board)) {
      return true;
    }

    // Undo the change we made. This is only necessary because our
    // code destructively modifies the input board.
    board[row][col] = 0;
  }

  // If there are no possble values or all the possible values
  // lead to a dead end then return false
  return false;
}

// Returns a copy of a new (solved) board, rather than modifying
// the input
function solveSudokuNonDestructive(board) {
  let [row, col] = findFirstEmptyCell(board);

  if (row === -1 && col === -1) {
    return board;
  }

  let possibleValues = findPossibleValues(board, row, col);

  for (let possibleValue of possibleValues) {
    let newRow = [...board[row]];
    newRow[col] = possibleValue;

    // Quicklky get shallow copies of rows we're not modifying, and only
    // a fully copy of the row we are modifying
    let newBoard = [...board.slice(0,row), newRow, ...board.slice(row + 1)]

    let solvedBoard = solveSudoku(newBoard);

    if (solvedBoard) {
      return solvedBoard;
    }

    // Notice there's no "undo"
  }

  return null;
}

let sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];


// printSudokuBoard(sudokuBoard);

let solved = solveSudoku(sudokuBoard);

printSudokuBoard(solved);


// function dfs(root, callback) {
//   callback(root);

//   let possibleValues = root.childten;

//   for (let val of possibleValues) {
//     dfs(child, callback);
//   }
// }