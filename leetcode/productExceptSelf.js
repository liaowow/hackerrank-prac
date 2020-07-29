/* 
Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(arr) {
  let result = []
  // accumulating product of elements from the left
  for (let i = 0, acc = 1; i < arr.length; i++) {
    result[i] = acc
    acc *= arr[i]
  }

  // accumulating product of elements from the right
  for (let i = arr.length - 1, acc = 1; i >= 0; i--) {
    result[i] *= acc
    acc *= arr[i]
  }

  return result
}