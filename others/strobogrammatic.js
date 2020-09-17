/**
 * Determine whether a number is Strobogrammatic, meaning
 * the number retains identity when its numerals are physically rotated 180°
 * 
 * @input number to analyze
 * @return boolean true if strobogrammatic or false if otherwise
 **/

function isStrobogrammatic(num) {
	// your code here
  
  const validArr = [0, 1, 8]
  const stringifiedNum = String(num)

  // if num is single digit...
  if (stringifiedNum.length === 1) {
    return validArr.includes(num) ? true : false
  }

  // otherwise...
  let i = 0
  let j = stringifiedNum.length - 1

  while (i < j) {

    if (stringifiedNum[i] === stringifiedNum[j]) {
      if (!validArr.includes(stringifiedNum[i]) && !validArr.includes(stringifiedNum[j])) {
        return false
      }
    } else {
      // factor in '6' and '9'
      if (stringifiedNum[i] === '6' && stringifiedNum[j] !== '9') {
        return false
      }

      if (stringifiedNum[i] === '9' && stringifiedNum[j] !== '6') {
        return false
      }
    } 
    i++
    j--
  }

  return true
}

/* use hashmap */
function isStrobogrammaticMap(num) {
  const stringNum = String(num)
  const map = {
    '0': '0',
    '1': '1',
    '8': '8',
    '6': '9',
    '9': '6',
  }

  // for (let i = 0; i < stringNum.length / 2; i++) {
  //   let left = stringNum[i]
  //   let right = stringNum[stringNum.length - 1 - i]
  //   if (map[left] !== right) {
  //     return false
  //   }
  // }
  let i = 0
  let j = stringNum.length - 1
  while (i < j) {
    const left = stringNum[i]
    const right = stringNum[j]
    if (map[left] !== right) {
      return false
    } else {
      i++
      j--
    }
  }
  return true
}

/* Test Cases */
isStrobogrammatic(1) // T
isStrobogrammatic(2) // F
isStrobogrammatic(101) // T
isStrobogrammatic(303) // F
isStrobogrammatic(1011) // F, 1101
isStrobogrammatic(96) // T

isStrobogrammaticMap(11011) // T
isStrobogrammaticMap(9669) // F, 6996

// resource: https://github.com/grandyang/leetcode/issues/246