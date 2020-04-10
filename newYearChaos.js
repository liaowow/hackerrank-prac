'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let finalArr = q.slice()
  let sortedArr = q.sort((a, b) => a - b)
  let numOfBribes = 0

  for (let i = 0; i < finalArr.length; i++) {
    if (finalArr[i] !== sortedArr[i]) {
      let originalIdx = sortedArr.indexOf(finalArr[i])
      if ((originalIdx - i) > 2) {
        console.log("Too chaotic")
        return
      } else if ((originalIdx - i) > 0) {
        numOfBribes += (originalIdx - i)
      }
    }
  }
  console.log(numOfBribes)
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
