// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Why (arr.length - i) - 1? 
    // Because on 1st iteration (i = 0), the last element in the inner loop will go out of bounds if not subtracted by 1
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const smallerVal = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = smallerVal
      }
    }
  }
  return arr
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
