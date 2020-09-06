/* 
Given an array of integers, return a sorted (ascending) array that contains the square of each number.
*/

// brute force: O(n log(n)) time
function square(arr) {
  arr = arr.map(num => num * num)
  return arr.sort((a, b) => a - b)
}

// O(n) time
function squareTwoPointers(arr) {
  let result = []
  // create 2 pointers: i keeps track of negatives, j keeps track of positives
  let j = 0
  let i;
  // keep moving j forward until arr[j] is a positive integer
  // set i as one index before j 
  while (j < arr.length && arr[j] < 0) {
    j++
    i = j - 1
  }
  // as long as i is not out of bound, compare the square of arr[i] and arr[j]
  while (j < arr.length && i >= 0) {
    if ((arr[i] * arr[i]) < (arr[j] * arr[j])) {
      result.push((arr[i] * arr[i]))
      i--
    } else {
      result.push((arr[j] * arr[j]))
      j++
    }
  }

  // add the remaining elements to the resulting array 

  while (i >= 0) {
    result.push((arr[i] * arr[i]))
    i--
  }

  while (j < arr.length) {
    result.push((arr[j] * arr[j]))
    j++
  }

  return result
}

square([1, 2, 3, 4, 5])
squareTwoPointers([-7, -3, 2, 3, 11])
