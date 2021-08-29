// O(wh) time && space, where 'w' is length of row (width), 'h' is length of col (height)
function riverSizes(matrix) {
  let sizes = [];
  let visited = matrix.map(row => row.map(value => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes)
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currRiverSize = 0
  const nodesToExplore = [[i, j]]
  while (nodesToExplore.length) {
    const currNode = nodesToExplore.pop();
    i = currNode[0]
    j = currNode[1]
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currRiverSize++
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (let neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currRiverSize > 0) sizes.push(currRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}