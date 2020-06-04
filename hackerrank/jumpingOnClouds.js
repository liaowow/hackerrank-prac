'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(arr) {
    let numOfJumps = 0
    for (let i = 0; i < arr.length - 1; i++) {
        // if the next 2 indices are [1, 0] OR [0, 0]... 
        if ( (arr[i + 1] === 1 && arr[i + 2] === 0) || (arr[i + 1] === 0 && arr[i + 2] === 0) ) {
            //...make a jump and skip the next index
            numOfJumps++
            i++
        } else {
            // otherwise, jump once and continue the loop
            numOfJumps++
        }
    }
    return numOfJumps
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}

/******* TEST CASE(S) *******/
jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])