// time O(row * col)
// space O(row * col)
const gridTravelerTab = (row, col) => {
  const table = Array(row + 1)
    .fill()
    .map(() => Array(col + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      const current = table[i][j];
      if (j + 1 <= col) table[i][j + 1] += current;
      if (i + 1 <= row) table[i + 1][j] += current;
    }
  }

  return table[row][col];
}

console.log(gridTravelerTab(1, 1)) // 1
console.log(gridTravelerTab(2, 3)) // 3
console.log(gridTravelerTab(3, 3)) // 6
console.log(gridTravelerTab(18, 18)) // 2333606220