/* Description: 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Examples:
Input: nums = [4,1,2,1,2]
Output: 4

Input: nums = [2,2,1]
Output: 1

Input: nums = [1]
Output: 1
*/

// O(n) time space
function singleNumber(arr) {
  const lookup = {}
  for (let num of arr) {
      if (!lookup[num]) {
          lookup[num] = 1
      } else {
          lookup[num]++
      }
  }
  
  for (let key in lookup) {
      if (lookup[key] === 1) return key
  }
}

// Bit Manipulation: O(n) time, O(1) space
/* XOR concept:
If we take XOR of zero and some bit, it will return that bit (a ^ 0 = a)
If we take XOR of two same bits, it will return 0 (a ^ a = 0)
So we can XOR all bits together to find the unique number.
*/
function singleNumberOpt(arr) {
  let a = 0
  for (let num of arr) {
    a ^= num
  }
  return a
}