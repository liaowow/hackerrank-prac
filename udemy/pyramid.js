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
    // const col = (n === 2) ? (n + 1) : (n + 2) -> my original
    const col = n * 2 - 1
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
    // determine number of columns (n * 2 - 1), find middleIdx
    const midPoint = Math.floor((n * 2 - 1) / 2)
    // iterate over each row
    for (let row = 0; row < n; row++) {
        // create empty str
        let level = ''
        // iterate over colomns
        for (let col = 0; col < (n * 2 - 1); col++) {
            if (midPoint - row <= col && midPoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(level)
    }
}

/* SOLUTION#2 -- using recursion */
function pyramid2(n, row = 0, level = '') {
    // base case
    if (row === n) {
        return;
    }
    
    if (level.length === (2 * n - 1)) {
        console.log(level)
        return pyramid(n, row + 1)
    }

    const midPoint = Math.floor((2 * n - 1) / 2)
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }
    pyramid(n, row, level + add)
} 