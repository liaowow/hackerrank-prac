// m = target.length, n = wordBank.length

// time: O(n^m * m) -> extra m comes from slice() method
// space: O(m * m) -> extra m comes from slice() method
const countConstruct = (target, wordBank) => {
  if (target === '') return 1;

  let totalCount = 0;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWaysForRest = countConstruct(target.slice(word.length), wordBank);
      totalCount += numOfWaysForRest;
    }
  }

  return totalCount;
}

// time: O(m^2 * n) -> extra m comes from slice() method
// space: O(m * m) -> extra m comes from slice() method
const countConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWaysForRest = countConstructMemo(target.slice(word.length), wordBank, memo);
      totalCount += numOfWaysForRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstructMemo('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
])); // 0