'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    let readingInput = inputLines[1]; 
    let arr = []; 
    while (readingInput.search(' ') > 0) { 
      const ss = readingInput.substring(0, readingInput.search(' ')); 
      readingInput = readingInput.replace(ss, '').trim(); 
      arr.push(parseInt(ss)) 
    }

    arr.push(parseInt(readingInput)); 
    let sorted = arr.sort((a, b) => a - b); 
    let max = sorted[arr.length - 1]; 
    let min = sorted[0];
    let maxNumber = max - min;
    console.log(maxNumber)
}