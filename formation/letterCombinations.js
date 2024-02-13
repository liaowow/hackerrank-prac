/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
}

var letterCombinations = function(digits) {
if (digits === '') return [];

const output = [];
function permute(idx, path) {
  if (path.length === digits.length) {
    output.push(path.join(''));
    return;
  }

  const currDigit = digits[idx];
  const possibleLetters = map[currDigit];
  for (const letter of possibleLetters) {
    path.push(letter);
    permute(idx + 1, path);
    path.pop();
  }
}

permute(0, []);

return output;
};

// from NeetCode: https://www.youtube.com/watch?v=0snEunUacZY
var letterCombinationsNeetcode = function(digits) {
  if (!digits.length) return [];

  const output = [];
  function permute(idx, currStr) {
    if (currStr.length === digits.length) {
      output.push(currStr);
      return;
    }

    const currDigit = digits[idx];
    const chars = map[currDigit];
    for (let char of chars) {
      permute(idx + 1, currStr + char);
    }
  }
  permute(0, '');
  return output;
};