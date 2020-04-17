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

// Complete the arrayManipulation function below.
/*** MY SOLUTION: did not pass large cases ***/
function arrayManipulation(n, queries) {
  // (0) initialize array with n number of 0s
  let maxVal = 0
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(0)
  }
  // (1) loop thru queries (let j = 0)
  for (let j = 0; j < queries.length; j++) {
    let currRow = queries[j]
    let a = currRow[0]
    let b = currRow[1]
    let k = currRow[2]
    // (2) loop thru initial array (starting at a - 1, ending at b)
    for (let i = (a - 1); i < b; i++) {
      // (3) add k to arr[i]
      arr[i] += k
      // (4) assign maxVal to arr[i] if arr[i] > maxVal
      if (arr[i] > maxVal) maxVal = arr[i]
    }
  }
  return maxVal
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
