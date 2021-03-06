'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countTriplets function below.
/* MY [Brute Force] SOLUTION: Did not solve big cases */
function countTriplets(arr, r) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if ((arr[i] * r) === arr[j]) {
          for (let k = j; k < arr.length; k++) {
            if ((arr[j] * r) === arr[k]) {
              counter++
            }
          }
        }
      }
    }
    return counter
}

/* Solution Using forEach */
function countTripletsForEach(arr, r) {
    // create an empty hash and counter
    let dict = {}
    let count
    // go over each element in the arr
    arr.forEach(el => {
        /* Step 1: Create hashmaps for current element AND (element * r), if not already exist */
        if (!dict[el]) {
            dict[el] = {
                potentialDs: 0, // num of potential doubles
                potentialTs: 0 // num of potential triplets
            }
        }
        if (!dict[el * r]) {
            dict[el * r] = {
                potentialDs: 0, // num of potential doubles
                potentialTs: 0 // num of potential triplets
            }
        }
        
        /* Step 2: track num of potential doubles and triplets */
        count += dict[el].potentialTs // current element's num of potential triplets is what we want
        dict[el * r].potentialTs += dict[el].potentialDs // if current element already has potential doubles, (element * r) will form a potential triplet, so we concatenate these two counts 
        dict[el * r].potentialDs += 1 // current element will be the first half of (element * r), forming a potential double, so we add 1 to the num of potential doubles for (element * r)
    })

    return count
}

countTripletsForEach([1, 5, 5, 25, 125], 5)

/* Solution Using Reduce */
function countTripletsReduce(arr, r) {
    let count = 0;
    arr.reduce((acc, val) => {
      if (!acc[val]) { 
          acc[val] = { 
              s1: 0, 
              s2: 0, 
              s3: 0 
          }
      }

      if (!acc[val * r]) { 
          acc[val * r] = { 
              s1: 0, 
              s2: 0, 
              s3: 0 
          } 
      }
      count += acc[val].s3
      acc[val * r].s3 += acc[val].s2
      acc[val * r].s2 += 1
      return acc
    }, {})
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}

/******* TEST CASE(S) *******/
countTriplets([1, 5, 5, 25, 125], 5)
countTripletsForEach([1, 5, 5, 25, 125], 5)
countTripletsReduce([1, 5, 5, 25, 125], 5)
// countTriplets([1, 1, 1, 1, 1, ...], 1) <-- array of 100 elements, all 1s

// resource:
// https://www.hackerrank.com/challenges/count-triplets-1/forum
// https://whoan.me/hacker-rank-challenge-1.html