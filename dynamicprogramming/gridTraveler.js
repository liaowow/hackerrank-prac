// time O(n ^ (row + col))
// space O(row + col)
const gridTraveler = (row, col) => {
  if (row === 1 && col === 1) return 1;
  if (row === 0 || col === 0) return 0;
  return gridTraveler(row - 1, col) + gridTraveler(row, col - 1);
}

// time O(row * col)
// space O(row + col)
const gridTravelerMemo = (row, col, memo = {}) => {
  const key = `${row}-${col}`;
  if (key in memo) return memo[key];
  if (row === 1 && col === 1) return 1;
  if (row === 0 || col === 0) return 0;
  memo[key] = gridTravelerMemo(row - 1, col, memo) + gridTravelerMemo(row, col - 1, memo);
  return memo[key];
}

console.log(gridTravelerMemo(1, 1)) // 1
console.log(gridTravelerMemo(2, 3)) // 3
console.log(gridTravelerMemo(18, 18)) // 2333606220