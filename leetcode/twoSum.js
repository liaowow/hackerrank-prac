/* Description:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// My initial solution
const twoSumMySolution = function(nums, target) {
    /*
    1. filter out nums that are bigger than target
    2. define 2 variables (num1 && num2) to save two sums
    3. iterate over nums array
    4a. assign num1 to current element
    4b. assign num2 to (target - num1)
    5. if index of num2 exists, we have a match!
    6. save index of num1 && index of num2 to a new array and return it
    */
    let result = []

    const newArr = nums.filter(num => num <= target)

    let num1 = 0, num2 = 0

    newArr.forEach(currNum => {
        num1 = currNum
        num2 = target - currNum
        if (newArr.indexOf(num2)) {
          result.push(newArr.indexOf(num1))
          result.push(newArr.indexOf(num2))
        }
      })

    return result
}

// Solution#1: O(n) - One-pass Hash Table
function twoSum1(nums, target) {
    let map = new Map // storing current element's complement as key, and current element's index as value
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        // While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}

// Solution#2: also One-pass Hash Table
function twoSum2(nums, target) {
    let obj = {} // storing current element's complement as key, and current element's index as value
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] >= 0) {
            return [obj[nums[i]], i]
        }
        obj[target - nums[i]] = i
    }
}

/*** Test Cases ***/
twoSumMySolution([2, 7, 11, 15], 9)
twoSum1([3, 3], 6)
twoSum2([3, 2, 4], 6)
