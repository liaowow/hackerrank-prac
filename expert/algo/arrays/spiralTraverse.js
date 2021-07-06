// O(n) time, O(n) space
function spiralTraverse(arr) {
  let result = []
	let startRow = 0
  let endRow = arr.length - 1
  let startCol = 0
  let endCol = arr[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    // top
    for (let col = startCol; col <= endCol; col++) {
      result.push(arr[startRow][col])
    }
    // right
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(arr[row][endCol])
    }
    // bottom
    for (let col = endCol - 1; col >= startRow; col--) {
      if (startRow === endRow) break; // handle edge case where there's only one row left
      result.push(arr[endRow][col])
    }
    // left
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break; // handle edge case where there's only one col left
      result.push(arr[row][startCol])
    }
    startRow++
    endRow--
    startCol++
    endCol--
  }
	return result
}


function spiralTraverseRecursive(arr) {
  let result = []
	
	spiralFill(arr, 0, arr.length - 1, 0, arr[0].length - 1, result)
	
	return result
}

function spiralFill(arr, startRow, endRow, startCol, endCol, result) {
  if (startRow > endRow || startCol > endCol) return;
  for (let col = startCol; col <= endCol; col++) {
    result.push(arr[startRow][col])
  }
  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(arr[row][endCol])
  }
  for (let col = endCol - 1; col >= startCol; col--) {
    if (startRow === endRow) break;
    result.push(arr[endRow][col])
  }
  for (let row = endRow - 1; row > startRow; row--) {
    if (startCol === endCol) break;
    result.push(arr[row][startCol])
  }
}