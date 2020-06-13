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

