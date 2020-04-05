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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let numOfPairs = 0
    let sortedArr = ar.sort((a, b) => a - b)
    // console.log(sortedArr)
    for (let i = 0; i < ar.length - 1; i++) {   
      console.log("starts for loop:", i)
      if (sortedArr[i] === sortedArr[i + 1]) {
        console.log("before add:", i)
        numOfPairs++
        i++
        console.log("after add:", i)
      }
      console.log("outside if statement:", i)
      console.log("===================")
    }

    return numOfPairs

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}