// m = target.length, n = wordBank.length

// time: O(n^m * m) -> extra m comes from slice() method
// space: O(m * m) -> extra m comes from slice() method
const canConstruct = (target, wordBank) => {
  if (target === '') return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      };
    }
  }

  return false;
}

// time: O(n * m^2) -> extra m comes from slice() method
// space: O(m * m) -> extra m comes from slice() method
const canConstructMemo = (target, wordBank, memo ={}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstructMemo(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      };
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
])); // false