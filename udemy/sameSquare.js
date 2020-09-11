function same(arr1, arr2) {
  // edge case: if both arrays don't have the same length
  if (arr1.length !== arr2.length) {
    return false
  }

  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    // check if squared value exists
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // check if frequency is the same
    if (frequencyCounter2[(key ** 2)] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}


same([1, 2, 3], [9, 1, 4])
same([1, 2, 3, 5], [9, 1, 4, 11])