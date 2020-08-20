/* Description:
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero. 
*/

function threeSum(nums) {
  let result = []
  // sort the array for easier search
  nums.sort((a, b) => a - b) 
  // (length - 2) because thing2 & thing3 can be the last two elements
  for (let i = 0; i < nums.length - 2; i++) {
    const thing1 = nums[i]
    // if current element already is bigger than 0, don't even bother
    if (thing1 > 0) break;

    // avoid element with the same value as thing1
    if (thing1 && thing1 === nums[i - 1]) continue;

    // will move thing2 right
    let thing2Idx = i + 1
    // will move thing3 left
    let thing3Idx = nums.length - 1

    while (thing2Idx < thing3Idx) {
      const thing2 = nums[thing2Idx]
      const thing3 = nums[thing3Idx]
      const sum = thing1 + thing2 + thing3

      if (sum < 0) {
        // move thing2 right
        thing2Idx += 1
      } else if (sum > 0) {
        // move thing3 left
        thing3Idx -= 1
      } else {
        // sum is 0, triplet is found!
        result.push([thing1, thing2, thing3])
        // keep moving inward in search for other potential triplets
        thing2Idx += 1
        thing3Idx -= 1
        // check if the next element for thing2Idx is duplicate; if so, keep moving right
        while (thing2Idx < thing3Idx && nums[thing2Idx] === nums[thing2Idx + 1]) {
          thing2Idx += 1
        }
        // check if the next element for thing3Idx is duplicate; if so, keep moving left
        while (thing2Idx < thing3Idx && nums[thing3Idx] === nums[thing3Idx - 1]) {
          thing3Idx -= 1
        }
      }
    }
  }

  return result
}

threeSum([-1, 0, 1, 2, -1, -4])
// -> [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]