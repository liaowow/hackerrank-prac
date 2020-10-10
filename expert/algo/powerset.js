// iterative solution: O(n^2 n) time && space complexity
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