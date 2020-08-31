/* Description: 
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.
If the input array is empty, return an empty array.
*/

/* Example:
const arr = [1, 2, 3]
permutationsInt(arr)
// => [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

// Solution#1: O(n! * n * n) or O(n^2 * n!) time, O(n * n!) space
function permutationsInt(arr) {
  let result = []
  helper(arr, currentPerm = [], result)
  return result
}

function helper(currentArr, currentPerm, result) {
  if (!currentArr.length && currentPerm.length) {
    result.push(currentPerm)
  } else {
    for (let i = 0; i < currentArr.length; i++) {
      const remainingIntArr = currentArr.slice(0, i).concat(currentArr.slice(i + 1))
      const newPerm = currentPerm.concat(currentArr[i])
      helper(remainingIntArr, newPerm, result)
    }
  }
}

// Solution#2 -- swap in place, and take screenshot of arr: O(n * n!) time, O(n * n!) space
function permutationsIntInPlace(arr) {
  let result = []
  helper(currIdx = 0, arr, result)
  return result
}

function helper(currIdx, arr, result) {
  if (currIdx === arr.length - 1) {
    result.push(arr.slice())
  } else {
    for (let j = currIdx; j < arr.length; j++) {
      swap(currIdx, j, arr)
      helper(currIdx + 1, arr, result)
      swap(currIdx, j, arr)
    }
  }
}

function swap(i, j, arr) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Solution#3 via Stack Overflow (link below)
function permutator(arr) {
  let result = []

  if (!arr.length) {
    return []
  }

  const helper = (arr, currPerm = []) => {
    if (!arr.length) {
      result.push(currPerm)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice()
        let next = curr.splice(i, 1)
        helper(curr, currPerm.concat(next))
      }
    }
  }

  helper(arr)
  return result
}

// Resource (other solutions):
// https://stackoverflow.com/questions/9960908/permutations-in-javascript/9960925#9960925