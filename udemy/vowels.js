// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* MY SOLUTION */
function vowels(str) {
    // split str into arr, all lowercased
    let arr = str.toLowerCase().split('')
    // set counter
    let counter = 0
    // loop thru arr
        // if element is vowel, counter++
    arr.forEach(char => {
        if (isVowel(char)) {
            counter++
        }
    })
    return counter
}

// helper func
function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(char)
}

/* ALT SOLUTION -- using RegEx */
function vowels2(str) {
    /* RegEx tips:
    g -> make sure we don't stop at the first match
    i -> case insensitive
    */
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}