function hourglassSum(arr) {
  let hourglassMax = -9 * 7
  let rows = arr.length
  let cols = arr[0].length
  for (let i = 0; i < rows - 2; i++) {
    for (let j = 0; j < cols - 2; j++) {
      const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
      const middle = arr[i + 1][j + 1]
      const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      const currSum = top + middle + bottom;

      hourglassMax = Math.max(hourglassMax, currSum)
    }
  }
  return hourglassMax
}

// hourglassSum([
// [1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 0, 2, 4, 4, 0],
// [0, 0, 0, 2, 0, 0],
// [0, 0, 1, 2, 4, 0]
// ])
// 19