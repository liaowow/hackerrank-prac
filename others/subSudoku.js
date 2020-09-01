/* 
Write a function that, given an NxN matrix, determines if the matrix is valid. A matrix is valid if every row and column contains exactly the numbers 1..N. For example, in a 4x4 matrix, each row and column would contain the numbers 1, 2, 3, and 4.
If the matrix is valid, return "VALID". If it is not valid, return "INVALID"
The matrix may contain any integer, not just 1..N, and not just positive. However, the grid will only contain integers.
*/

function subSudoku(matrix) {
  const map = {}
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      const num = matrix[row][col]
      const keyRow = `row ${row} has ${num}`
      const keyCol = `col ${col} has ${num}`
      
      if (num <= 0 || num > matrix.length || map[keyRow] || map[keyCol]) {
        return "INVALID"
      }
      
      map[keyRow] = true
      map[keyCol] = true
      
    }
  }
  
  return "VALID"
}