// m = target.length, n = wordBank.length

// time: O(n^m * m)
// space: O(m)
const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
};

// time: O(n^m * m)
// space: O(m)
const allConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstructMemo(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]));
// [
//   ['purp', 'le'],
//   ['p', 'ur', 'p', 'le']
// ]
console.log(
  allConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// [
//   ['ab', 'cd', 'ef'],
//   ['ab', 'c', 'def'],
//   ['abc', 'def'],
//   ['abcd', 'ef']
// ]
console.log(
  allConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // []
console.log(
  allConstructMemo("aaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaaa", "aaaaa"])
); // []
