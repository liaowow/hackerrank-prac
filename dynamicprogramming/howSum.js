// m = target sum, n = numbers.length

// time: O(n^m * m) -> extra m comes from line#13
// space: O(m)
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [ ...remainderResult, num ];
    }
  }

  return null;
}

// time: O(n*m * m) -> extra m comes from line#13
// space: O(m * m) -> m keys, each key has at worst m values
const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSumMemo(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [ ...remainderResult, num ];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

console.log(howSumMemo(7, [5, 2, 4, 7])) // [7] or [2, 5]
console.log(howSumMemo(8, [2, 3, 5])) // [3, 5] or [2, 2, 2, 2]
console.log(howSumMemo(7, [2, 4])) // null
console.log(howSumMemo(0, [1, 2, 3])) // []
console.log(howSumMemo(300, [7, 14])) // null

