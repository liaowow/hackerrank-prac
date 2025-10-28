// m = target sum, n = numbers.length

// time: O(m * n * m) 
// space: O(m * m)
const howSumTab = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [ ...table[i], num ];
      }
    }
  }

  return table[targetSum];
}

console.log(howSumTab(7, [5, 2, 4, 7])) // [7] or [2, 5]
console.log(howSumTab(8, [2, 3, 5])) // [3, 5] or [2, 2, 2, 2]
console.log(howSumTab(7, [2, 4])) // null
console.log(howSumTab(0, [1, 2, 3])) // []
console.log(howSumTab(300, [7, 14])) // null