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
function twoSum1(sums, target) {
    let map = new Map
    for (let i = 0; i < sums.length; i++) {
        let theOtherNum = target - sums[i]
        if (map.has(theOtherNum)) {
            return [map.get(theOtherNum), i]
        }
        map.set(nums[i], i)
    }
}


/*** Test Cases ***/
twoSumMySolution([2, 7, 11, 15], 9)
twoSum1([3, 3], 6)
twoSum2([3, 2, 4], 6)
