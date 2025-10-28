// m = target sum, n = numbers array length

// time: O(n^m)
// space: O(m)
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) return true;
  }

  return false;
}

// time: O(m * n)
// space: O(m)
const canSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    };
  }
  memo[targetSum] = false;
  return false;
}

// console.log(canSumMemo(7, [2, 3])); // true
// console.log(canSumMemo(7, [5, 3, 4, 7])); // true
// console.log(canSumMemo(7, [2, 4])); // false
// console.log(canSumMemo(300, [7, 14])); // false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}



 */
var wordBreak = function(s, wordDict) {
  let set = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
      }
    }
  }
  return dp[s.length]
};

console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])); // true