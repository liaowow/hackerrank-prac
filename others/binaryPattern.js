/* Description: 
Write a function that takes a pattern consisting of a sequence of 1s and 0s and a string consisting of lowercase letters. The function should then return the count of all possible matches where 0s correspond to lowercase vowels and 1s correspond to lowercase consonants (to clarify, a match has to have the same length and order as the pattern).
*/

const binaryPatterns = (pattern, str) => {
  let matches = 0

  // step 1: turn str into 0 and 1
  let digitsStr = ""
  for (let char of str) {
    if (/[aeiouy]/.test(char)) {
      digitsStr += "0"
    } else {
      digitsStr += "1"
    }
  }
  
  // step 2: compare digitsStr against pattern
  for (let i = 0; i < digitsStr.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      // comparing pattern[j] against digitsStr[i + j]
      // because j changes while we are still in the same i loop
      if (pattern[j] !== digitsStr[i + j]) {
        // if there's a mismatch, break out of the loop
        break
      } else if (j === pattern.length - 1) {
        // if we made it to the last element in j loop...
        // ...and no mismatch is found, we have a match!
        matches++
      }
    }
  }

  return matches
}

/* optimized solution */
const binaryPatternsOpt = (pattern, str) => {

}

binaryPatterns("010", "amazing")