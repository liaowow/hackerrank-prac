/*
'''
❓ PROMPT
Given a base-10 integer as a string, parse the integer and return it as an int. This problem can be done iteratively and recursively, and it's worth doing both! 

Example(s)
atoi("123") == 123
atoi("4") == 4
atoi("007") == 7
atoi("-1") == -1

*/

function atoi_iterative(intAsString) {
  const map = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  };
  let value = 0;
  const negative = intAsString[0] === '-';
  let i = negative ? 1 : 0;

  for(; i < intAsString.length; i++) {
    const digit = map[intAsString[i]];
    value = value * 10 + digit;
  }

  return negative ? -value : value;
}

function atoi_recursive(intAsString) {
  const map = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  };

  function recursiveHelper(intAsString, index, value = 0) {

    if (index === intAsString.length) {
      return value;
    }

    const nextValue = value * 10 + map[intAsString[index]];
    return recursiveHelper(intAsString, index + 1, nextValue);
  }

  const negative = intAsString[0] === '-';
  const start = negative ? 1 : 0;
  const value = recursiveHelper(intAsString, start);

  return negative ? -value : value;
}

console.log(atoi("123") == 123)
console.log(atoi("4") == 4)
console.log(atoi("0") == 0)
console.log(atoi("007") == 7)
console.log(atoi("-1") == -1)
console.log(atoi("-234") == -234)
console.log(atoi("600") == 600)
console.log(atoi("00500") == 500)