'use strict';

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let magWords = {}
    let result = ''
  
    // add words to magWords object
    magazine.forEach(word => magWords[word] = magWords[word] ? magWords[word] + 1 : 1)
  
    //Loop through note arr
    for (let i = 0; i < note.length; i++){
        //compare against magWords
        if (!(note[i] in magWords)) {
            result = 'No'
            break
        } else {
            //check if there's enough word for notes
            if (magWords[note[i]] < 1) {
                result = 'No'
                break
            }
            //otherwise, there's a word available, so subtract 1 from magWords word value
            magWords[note[i]] = magWords[note[i]] - 1
        }
    }
  
    if (result === '') { 
      result = 'Yes' 
    }
    console.log(result);
  }

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}

/******* TEST CASE(S) *******/
checkMagazine(["two", "times", "three", "is", "not", "four"], ["two", "times", "two", "is", "four"])