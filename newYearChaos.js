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
/*** MY SOLUTION (did not solve cases where bribes happen in the updated queue) ***/
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

/*** SOLUTION #1 via Medium ***/
/*** https://levelup.gitconnected.com/array-code-challenge-breakdown-8799f903d9cc ***/
function minimumBribes1(q) {
    let swaps = 0
    for (let i = 0; i < q.length; i++) {
      // q[i] represents the original position; (i + 1) represents the current position
      let bribes = q[i] - (i + 1)
      if (bribes > 2) {
        console.log('Too chaotic')
        return
      }
      // make sure the furthest position (q[i] - 2) doesn't become negative
      let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0
      for (let j = maxAdvance; j < i; j++) {
        // q[j] represents the person(s) ahead; q[i] represents current person
        if (q[j] > q[i]) swaps++
      }
    }
    console.log(swaps)
}
  
  
/*** SOLUTION #2 via GitHub ***/
/*** https://github.com/Amjad-H-Ali/New-Year-Chaos/blob/master/JS/app.js ***/
function minimumBribes2(q) {
    let counter = 0
    // loop thru the queue from the end
    for (let i = q.length - 1; i >= 0; i--) {
      // check if current person has bribed more than twice: 
      // original position (q[i]) minus current position (i + 1)
      if (q[i] - (i + 1) > 2) {
          console.log("Too chaotic")
          return
      }
      // loop from one index before the original index (stay at 0 if we go past index 0)...
      // ...all the way to current index
      for (let j = Math.max(0, q[i] - 2); j < i; j++) {
        // check if any integer in the previous index is bigger than the integer in the current index
        if(q[j] > q[i]) {
            counter++
        }
      }
    }
    console.log(counter)
}
  
/*** SOLUTION #3 via StackExchange ***/
/*** https://codereview.stackexchange.com/questions/217867/new-year-chaos-javascript-needs-to-be-sped-up ***/
function minimumBribes3(queue) {
    var bribes = 0, i, j;
    for (i = 0; i < queue.length; i++) {
        const pos = queue[i], at = i + 1;
        if (pos - at > 2) { 
        console.log("Too chaotic") 
        return
        } 
        for (j = pos - 2; j < i; j++) {
            if (queue[j] > pos) { bribes++ }
        }
    } 
    console.log(bribes)
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
