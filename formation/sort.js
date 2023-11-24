/********** BUBBLE SORT **********/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}


/********** SELECTION SORT **********/
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currMinIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currMinIdx]) {
        currMinIdx = j;
      }
    }
    [arr[i], arr[currMinIdx]] = [arr[currMinIdx], arr[i]]
  }

  return arr;
}


/********** INSERTION SORT **********/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}


/********** QUICK SORT **********/
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivotVal = arr[Math.floor(arr.length / 2)];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivotVal) {
      leftArr.push(arr[i]);
    } else if (arr[i] > pivotVal) {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivotVal, ...quickSort(rightArr)];
}

/********** MERGE SORT **********/
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midPoint);
  const rightArr = arr.slice(midPoint);

  return merge(
    mergeSort(leftArr),
    mergeSort(rightArr),
  )
}

function merge(leftArr, rightArr) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    const leftItem = leftArr[leftIdx];
    const rightItem = rightArr[rightIdx];

    if (leftItem < rightItem) {
      result.push(leftItem);
      leftIdx++;
    } else {      
      result.push(rightItem);
      rightIdx++;
    }
  }

  return [...result, ...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx)];
}



// Test Cases
console.log(mergeSort([])) // []
console.log(mergeSort([1])) // [1]
console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]