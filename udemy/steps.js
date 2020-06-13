// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* MY SOLUTION: using .splice() */
function steps(n) {
    // populate an array of n spaces
    let arr = Array(n).fill(' ')
    // loop thru array
    // replace currElement with '#'
    // console.log array.join('')
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1, '#')
        console.log(arr.join(''))
    }
}

/* SOLUTION#1 -- rows and columns */
function steps1(n) {
    // from 0 to n (iterating thru rows)
        // create an empty string, 'stair'
        // from 0 to n (iterating thru cols)
            // if current column is equal to or less than current row
                // add '#' to 'stair'
            // else, add a space to 'stair'
        // console log 'stair'
    for (let row = 0; row < n; row++) {
        let stair = ''
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair)
    }
}