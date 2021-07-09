const lookup = {
	0: ['0'],
	1: ['1'],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
}

function phoneNumberMnemonics(phoneNumber) {
  let result = []
  let currentCombo = new Array(phoneNumber.length).fill('0')

  printEachChar(idx, phoneNumber, currentCombo, result)

  return result;
}

function printEachChar(idx, phoneNumber, currentCombo, result) {
  if (idx === phoneNumber.length) {
    result.push(currentCombo.join(''))
  } else {
    const digit = phoneNumber[idx]
    const letters = lookup[digit];
    for (let letter of letters) {
      currentCombo[idx] = letter;
      printEachChar(idx + 1, phoneNumber, currentCombo, result)
    }
  }
}

