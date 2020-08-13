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

// Complete the rotLeft function below.
function rotLeft(arr, d) {
    let tempArr = arr.slice()
    for (let i = 0; i < d; i++) {
        let firstItem = arr.shift()
        tempArr.push(firstItem)
    }
    return tempArr
    /*** MY SOLUTION: didn't pass 2 big test cases
    for (let i = 0; i < d; i++) {
        // 1. create a copy of arr starting at index 1, save to a variable (tempArr)
        // 2. push arr[0] to tempArr
        // 3. Now, tempArr has the updated order, so we reassign arr to tempArr
        let tempArr = arr.slice(1)
        tempArr.push(arr[0])
        arr = tempArr
    }
    return arr
    ***/
}

/* SOLUTION#1 -- using modulus && .splice() */
function rotateLeft(array, n) {
    n = n % array.length
    array.push(...array.splice(0, n))
    return array
  }

/* SOLUTION#2 -- O(n) */
function rot(a) {
    let last = a[0]
    for (let i = 0; i < a.length; i++) {
        let next = (i+1) % a.length
        a[i] = a[next]
    }
   a[a.length-1] = last
   return a;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
