// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/* MY SOLUTION */
function capitalize(str) {
    let strArr = str.split(' ')
    let newArr = []
    for (let word of strArr) {
      word = word[0].toUpperCase() + word.slice(1)
      newArr.push(word)
    }
    return newArr.join(' ')
}

/* SOLUTION#1 -- similar to mine */
function capitalize1(str) {
    const words = []
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

/* SOLUTION#2 */
function capitalize2(str) {
    // create a string called 'result' with first char capitalized
    let result = str[0].toUpperCase()
    // for each char in str
        // if char to the left is a space
            // capitalize it and add to result
        // else, add to result
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result
}