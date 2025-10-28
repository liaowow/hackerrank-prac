// m = target sum, n = numbers array length

// time: O(m * n)
// space: O(m)
const canSumTab = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0 ; i <= targetSum; i++) {
    if (table[i] === true) {
      for (const num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
}

console.log(canSumTab(7, [2, 3])); // true
console.log(canSumTab(7, [5, 3, 4, 7])); // true
console.log(canSumTab(7, [2, 4])); // false
console.log(canSumTab(300, [7, 14])); // false