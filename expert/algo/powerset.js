// iterative solution: O(n^2 * n) time && space complexity
function powerset(arr) {
  let result = [[]]
  // (1) iterate over arr
  for (let i = 0; i < arr.length; i++) {
    // (2) record the current result length
    const currResultLeng = result.length
    // (3) at each num in arr, iterate over the subset
    for (let j = 0; j < currResultLeng; j++) {
      const currSubset = result[j]
      // (4) create a new subset with that num
      result.push(currSubset.concat(arr[i]))
    }
  }
  return result
}

// recursive solution: O(n^2 * n) time && space complexity
function powersetRecursive(arr, idx = null) {
  // initial setting: assign idx to the idx of last element
  if (idx === null) {
    idx = arr.length - 1
  }
  // base case
  if (idx < 0) {
    return [[]]
  }

  const lastEle = arr[idx]
  const result = powersetRecursive(arr, idx - 1)
  const currLeng = result.length
  for (let i = 0; i < currLeng; i++) {
    const currSubset = result[i]
    result.push(currSubset.concat(lastEle))
  }

  return result
}