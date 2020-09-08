/* 
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.
*/

function sortKMessedArray(arr, k) {
  for(let i = 0; i < arr.length-1; i++) {
    let minPosition = i;
    for(let j = i+1; j <= i+k; j++) {
      if(arr[j] < arr[minPosition]) {
        minPosition = j;
      }
    }
    if(minPosition !== i) swap(arr, minPosition, i);
  }
  return arr;

  function swap(arr, i, j) {
    arr[i] += arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
  }
  
}

sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]