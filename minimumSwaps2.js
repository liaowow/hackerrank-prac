'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swaps = 0
    for (let i = 0; i < arr.length; i++) {
        let correctNum = i + 1
        // check if current item is correctNum
        // if so, no need to swap; if not...
        if (arr[i] !== correctNum) {
            // find the idx of correctNum in current arr (starting from the current idx)
            let correctIdx = arr.indexOf(correctNum, i)
            /*** start swapping ***/
            // (1) reassign element with correctIdx to the current element
            arr[correctIdx] = arr[i]
            // (2) reassign current element to correctNum
            arr[i] = correctNum
            /*** end swapping ***/
            swaps++
        }
    }
    return swaps
}
// reference: https://stackoverflow.com/questions/55210162/minimum-number-of-swaps-to-sort-an-array

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
