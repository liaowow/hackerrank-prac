// m = target.length, n = wordBank.length

// time: O(n^m * m) 
// space: O(m) 
const countConstructTab = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
}

console.log(countConstructTab('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstructTab('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
])); // 0