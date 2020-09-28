function minSubArrayLen(arr, target) {
  let minLength = Infinity // intialize the result
  let sum = 0 // to record current sum
  let left = 0 // left idx
  let right = 0 // right idx

  while (left < arr.length) {
    // if current sum still hasn't added up to target value, keep expanding right panel
    if (sum < target && right < arr.length) {
      sum += arr[right]
      right++
      // else, if we've reached the target value:
      // (1) compare current length with minimum length, save the smaller length
      // (2) shrink the window: subtract the value at left idx, and move the left panel to the right
    } else if (sum >= target) {
      minLength = Math.min(minLength, (right - left))
      sum -= arr[left]
      left++
      // otherwise, current sum is still less than target value BUT we've reached the end
    } else {
      break
    }

  }

  return minLength === Infinity ? 0 : minLength
}

// tests
minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2

// resource: https://stackoverflow.com/questions/62315465/why-do-i-need-to-break-out-of-the-loop-here-minsubarraylen