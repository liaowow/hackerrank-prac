/* naive solution, O(n^2) time */
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }

  let max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    let currSum = 0
    for (let j = 0; j < num; j++) {
      currSum += arr[i + j]
    }
    if (currSum > max) {
      max = currSum
    }
  }

  return max
}

/* sliding-window solution, O(n) time */
function maxSubarraySumOptimized(arr, num) {
  // edge case
  if (num > arr.length) return null
  
  let maxSum = 0
  let tempSum = 0

  // create first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  // assign tempSum to first sum
  tempSum = maxSum

  // start with the position at num: subtract the first num in previous sum, add current num
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}


/* tests */
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17