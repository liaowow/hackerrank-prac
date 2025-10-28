// m = target sum, n = numbers.length

// time: O(n^m * m)
// space: O(m^2) -> because we need to store array (shortestCombination) in each stack frame
const bestSumTab = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [ ...table[i], num ];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
}

console.log(bestSumTab(7, [5, 3, 4, 7])) // [7]
console.log(bestSumTab(8, [2, 3, 5])) // [3, 5]
console.log(bestSumTab(8, [1, 4, 5])) // [4, 4]
console.log(bestSumTab(100, [1, 2, 5, 25])) // [25, 25, 25, 25]