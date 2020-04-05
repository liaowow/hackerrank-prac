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

// Complete the repeatedString function below.
function repeatedString(s, n) {
  let result = 0
  // count number of "a" in the original string
  let numOfA = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      numOfA++
    }
  }
  // multiple that number by number of repeats needed
  result = numOfA * Math.floor(n / s.length)
  // loop thru the remaining characters...
  // ...and add number of "a" if found
  // (n % s.length) gives us the # of remaining chars
  for (let j = 0; j < (n % s.length); j++) {
    if (s[j] === "a") {
      result++
    }
  }
  return result

  /*** MY ORIGINAL SOLUTION: only solved simple cases
    if (s === "a") {
        return n
    } else if (n > s.length) {
      let numOfCharsToAdd = n - s.length
      for (let i = 0; i < numOfCharsToAdd; i++) {
          s += s[i]
      }      
    }

    // otherwise, find number of "a" in string
    let result = 0
    for (let j = 0; j < s.length; j++) {
      if (s[j] === "a") {
        result++
      }
    }
    return result
  ***/
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}