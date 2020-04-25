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

// Complete the twoStrings function below.
/*** MY SOLUTION: did not pass large cases ***/
function twoStringsSmallCases(s1, s2) {
    let s1Arr = s1.split('')
    let s2Arr = s2.split('')
    let result = "NO"
  
    s1Arr.forEach(char => {
      if (s2Arr.includes(char)) {
        result = "YES"
      }
    })
    return result
}

/*** SOLUTION: string is an array of characters by default ***/
function twoStrings(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
        return "YES"
    }
  }
  return "NO"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}

/******* TEST CASE(S) *******/
twoStrings("hello", "world")
twoStringsSmallCases("hi", "world")