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
  for (let i = 0; i < arr.length; i++) {
    // assume current idx has the lowest value
    let indexOfMin = i 
    // "prove me wrong" inner loop
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    if (indexOfMin !== i) {
      const lowerVal = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lowerVal
    }
  }
  return arr
}

function mergeSort(arr) {
  // base case: there's nothing to split
  if (arr.length === 1) {
    return arr
  }
  // recursive: split arr, and pass the split ones back into mergeSort()

  // determine center point, left half, and right half
  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const results = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  // ES6 syntax for joining multiple elements from different arrays into a new array
  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
