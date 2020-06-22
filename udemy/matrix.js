// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // populate an array of n arrays
    const results = Array(n).fill([])
    let counter = 1
    let startCol = 0
    let endCol = n - 1
    let startRow = 0
    let endRow = n - 1

    while (startCol <= endCol && startRow <= endRow) {
        // responsible for top row
        for (let i = startCol; i < endCol; i++) {
            results[startRow][i] = counter
            counter++
        }
        startRow++

        // responsible for right col
        for (let i = startRow; i < endRow; i++) {
            results[i][endCol] = counter
            counter++
        }
        endCol--

        // responsible for bottom row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--
        // responsible for left col
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter
            counter++
        }
        startCol++
    }
    return results
}

/* SOLUTION#1 */
function matrix2(n) {
    const mat = Array(n).fill().map(()=>Array(n).fill());

    const directions = ['r', 'd', 'l', 'u'];
    let directionIndex = 0;
    let steps = n;
    let stepCounter = 0;
    let count = 1;
    let col = row = 0;
 
 
    while (count <= n*n) {
        mat[row][col] = count;
        stepCounter++;
        if (stepCounter === steps) {
            stepCounter = 0;
            directionIndex++;
            directionIndex %= directions.length;
            if (directions[directionIndex] === 'd' || directions[directionIndex] === 'u') {
                steps--;
            }
        }
 
        switch (directions[directionIndex]) {
            case 'r':
                col++;
                break;
            case 'd':
                row++;
                break;
            case 'l':
                col--;
                break;
            case 'u':
                row--;
                break;
        }
 
        count++;
    }
 
    return mat;
}