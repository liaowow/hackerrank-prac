/* 
Given an array of distinct integers and a sum value. Find count of triplets with sum smaller than given sum value
*/
// brute force, O(n^3)
function triplets(arr, sum) {
  let count = 0
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] < sum) {
          count++
        }
      }
    }
  }
  return count
}

// optimized, O(n^2):
/* 
1) Sort the input array in increasing order.
2) Initialize count as 0.
3) Run a loop from i = 0 to n-2. An iteration of this loop finds all triplets with arr[i] as first element.
- a) Initialize other two elements as corner elements of subarray
        arr[i+1..n-1], i.e., j = i+1 and k = n-1
- b) Move j and k toward each other until they meet
        i.e., while (j < k), then do k--
              Else for current i and j, there can (k-j) possible third elements that satisfy the constraint.
              (ii) Else Do count += (k - j) followed by j++
*/
function tripletsOpt(arr, sum) {
  // sort the array in asc order
  arr = arr.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < arr.length - 2; i++) {
    // set 2 corner pointers: 
    // j starting from the idx next to i, k starting from the last idx
    let j = i + 1
    let k = arr.length - 1
    // Meet In the Middle concept:
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] >= sum) {
        // if the current sum is largest than target sum,
        // move k to a smaller value
        k--
      } else {
        // otherwise, we found our target sum!
        // for current i and j, there are (k - j) third elements that meet our target
        count += (k - j)
        // increase j to find the next potential triplets
        j++
      }
    }
  }
  return count
}


triplets([3, 1, 2, 4], 7)