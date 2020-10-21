function binarySearch(arr, val) {
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    if (arr[i] === val) return i
    if (arr[j] === val) return j
    if (arr[i] < val) {
      i++
    }
    if (arr[j] > val) {
      j--
    }
  }
  return -1
}