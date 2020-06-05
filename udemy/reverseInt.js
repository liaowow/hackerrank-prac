// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY SOLUTION -- only solves positive numbers
// function reverseInt(n) {
//     let str = String(n)
//     if (n < 0) {
//         // get rid of negative sign??
//         str.split().unshift()
//     }
//     return Number(str.split('').reverse().join('')) 
// }

// SOLUTION#1 -- just multiply n by -1
function reverseInt1(n) {
    const reversed = String(n).split('').reverse().join('')
    if (n < 0) {
        return parseInt(reversed) * -1
    }   
    return parseInt(reversed)
}

// SOLUTION#2 -- using Math.sign()
function reverseInt2(n) {
    const reversed = String(n).split('').reverse().join('')
 
    return parseInt(reversed) * Math.sign(n)
}

/* 
parseInt(n) vs. Number(n):
https://www.freecodecamp.org/forum/t/number-x-vs-parseint-x/188411/4
*/