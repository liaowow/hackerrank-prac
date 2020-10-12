/* Description:
Given an array, rotate the array to the right by k steps, where k is non-negative. 
No need to return anything.
Could you do it in-place with O(1) extra space?
*/

// use built-in methods: pop() and unshift() 
function rotate(arr, k) {
  k = k % arr.length
  for (let i = 0; i < k; i++) {
    const lastElement = arr.pop()
    arr.unshift(lastElement)
  }
}

// use extra array: O(n) time && space
function rotate(arr, k) {
  let newArr = []
  // the number at index i in the original array is placed at 
  // index (i+k) % length of array
  for (let i = 0; i < arr.length; i++) {
    newArr[(i + k) % arr.length] = arr[i]
  }

  // reassign elements in the newArr back to original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i]
  }
}

// use reverse: O(n) time && O(1) space
/* LeetCode explanation: 
This approach is based on the fact that when we rotate the array k times, k elements from the back end of the array come to the front and the rest of the elements from the front shift backwards.

In this approach, we firstly reverse all the elements of the array. Then, reversing the first k elements followed by reversing the rest (n − k) elements gives us the required result.
*/
function rotate(arr, k) {
  // handle cases where k is larger than array size, e.g. rotate([-1], 2)
  k = k % arr.length
  // (1) reverse all the elements of the array
  reverse(arr, 0, arr.length - 1)
  // (2) reverse the first k elements
  reverse(arr, 0, k - 1)
  // (3) reverse the rest (n - k) elements
  reverse(arr, k, arr.length - 1)
}

function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
  return arr
}
