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

/* SOLUTION#1 */
function capitalize1(str) {

}