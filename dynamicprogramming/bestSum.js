// m = target sum, n = numbers.length

// time: O(n^m * m)
// space: O(m^2) -> because we need to store array (shortestCombination) in each stack frame
const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ];
      // if combination is shorter than current shortestCombination, update it
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
}

// time: O(m^2 * n)
// space: O(m^2) -> because we need to store array (shortestCombination) in each stack frame
const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemo(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ];
      // if combination is shorter than current shortestCombination, update it
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return memo[targetSum];
}

console.log(bestSumMemo(7, [5, 3, 4, 7])) // [7]
console.log(bestSumMemo(8, [2, 3, 5])) // [3, 5]
console.log(bestSumMemo(8, [1, 4, 5])) // [4, 4]
console.log(bestSumMemo(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
