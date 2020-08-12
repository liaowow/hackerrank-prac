const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (rightBound > leftBound) {
    const pivotIndex = partition(array, leftBound, rightBound)
    // process only the left partition bounded by the left pointer and (pivot index - 1) to exclude the pivot element from the left partition
    quicksort(array, leftBound, pivotIndex - 1);
    // process only the right partition bounded by the pivot index and right pointer
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
}

// helper fn: partition
const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

// helper fn: swap
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
}