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

// Complete the sherlockAndAnagrams function below.
/*** get all substrings -> check if two substrings are anagrams -> count number of anagram pairs ***/
/* helper function 1 of 3 */
function getAllSubstrings(s) {
    let substrings = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            substrings.push(s.slice(i, j))
        }
    }
    return substrings
}

/* helper function 2 of 3 */
function isAnagram(str1, str2) {
    let charCounter = {}
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i]
        if (charCounter[char]) {
            charCounter[char]++
        } else {
            charCounter[char] = 1
        }
    }
    
    for (let j = 0; j < str2.length; j++) {
        let char = str2[j]
        if (charCounter[char]) {
            // WHY decrementing by 1?
            charCounter[char]--
        } else {
            return false
        }
    }
    return true
}

/* helper function 3 of 3 */

function sherlockAndAnagrams(s) {


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}

/******* TEST CASE(S) *******/
sherlockAndAnagrams("ifailuhkqq")
sherlockAndAnagrams("kkkk")

// Resource: https://www.freecodecamp.org/news/how-to-solve-the-sherlock-and-anagrams-coding-challenge-in-javascript-a80baa908637/

// Other Solutions: https://codereview.stackexchange.com/questions/219820/hackerrank-com-sherlock-and-anagrams