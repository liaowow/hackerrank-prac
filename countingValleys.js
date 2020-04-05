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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let numOfVelleys = 0
    let currentElevation = 0
    for (let i = 0; i < n; i++) {
        if (s[i] === "D") {
            currentElevation -= 1
        }

        if (s[i] === "U") {
            currentElevation += 1
            let upByOne = currentElevation
            if (upByOne === 0) {
                numOfVelleys += 1
            }
            /*** refactored: ***/
            // if (++currentElevation === 0) {
            //     numOfVelleys++
            // }
        }
    }
    return numOfVelleys

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}