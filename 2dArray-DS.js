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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let hourglassMax = 0
  let negArr = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let currSum = (arr[i][j] + arr[i][j+1] + arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])

      if (currSum >= 0 && currSum > hourglassMax) {
        hourglassMax = currSum
      } 
      
      if (currSum < 0) {
        negArr.push(currSum)
        if (negArr.length === 16) {
          hourglassMax = Math.max(...negArr)
        }
      }
    }
  }
  return hourglassMax
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}

hourglassSum([
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
])

// hourglassSum([
//     [0, -4, -6, 0, -7, -6],
//     [-1, -2, -6, -8, -3, -1],
//     [-8, -4, -2, -8, -8, -6],
//     [-3, -1, -2, -5, -7, -4],
//     [-3, -5, -3, -6, -6, -6],
//     [-3, -6, 0, -8, -6, -7]
//     ])