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

// Complete the freqQuery function below.
/*** MY SOLUTION: did not pass large data cases ***/
function freqQuery(queries) {
    let result = []
    let newArr = []
  
    queries.forEach(pair => {
      if (pair[0] === 1) {
        newArr.push(pair[1])
      }
  
      if (pair[0] === 2) {
        if (newArr.includes(pair[1])) {
          // get index of pair[1]
          const indexFound = newArr.indexOf(pair[1])
          // remove pair[1] via splice
          newArr.splice(indexFound, 1)
        }
      }
  
      if (pair[0] === 3) {
        let dict = {}
        
        newArr.forEach(val => {
          if (!dict[val]) {
            dict[val] = 1
          } else {
            dict[val]++
          }
        })
  
        let freqCheck = 0
  
        for (let key in dict) {
          if (dict[key] === pair[1]) {
            freqCheck++
          }
        }
  
        freqCheck === 0 ? result.push(0) : result.push(1)
  
      }
    })
  
    return result
  
  }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}

// resource
// https://www.hackerrank.com/challenges/frequency-queries/forum
// https://codereview.stackexchange.com/questions/202546/frequency-queries-hackerrank