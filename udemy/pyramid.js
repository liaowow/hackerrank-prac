// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* MY SOLUTION -- did not pass */
function pyramid(n) {
    // assign col to n + 2 (if n === 2, col will be n + 1)
    // assign middleIdx to Math.floor(col / 2)
    // populate an array of col number of spaces
    // loop thru array
        // if middleIdx === ' ', set it to '#'
        // if middleIdx + i === ' ' && middleIdx - i === ' ', set them to '#'
        // console log array
    const col = (n === 2) ? (n + 1) : (n + 2)
    const middleIdx = Math.floor(col / 2)
    let arr = Array(n).fill(' ') 
    for (let i = 0; i < arr.length; i++) {
      if (arr[middleIdx] === ' ') {
        arr[middleIdx] = '#'
        console.log(arr.join(''))
      }

      if ((arr[middleIdx + i] === ' ') && (arr[middleIdx - i] === ' ')) {
        arr.splice((middleIdx - i), 1, '#')
        arr.splice((middleIdx + i), 1, '#')
        console.log(arr.join(''))
      }
    }
}

/* SOLUTION#1 */
function pyramid1(n) {
    
}