function averagePair(arr, target){
  let left = 0
  let right = arr.length - 1

  if (!arr.length) {
    return false
  }

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2
    
    if (avg === target) {
      return true
    }
    
    if (avg > target) {
      right--
    }

    if (avg < target) {
      left++
    }
  }

  return false
}


// test cases
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 6, 10, 12, 19], 8) // true
averagePair([], 4) // false