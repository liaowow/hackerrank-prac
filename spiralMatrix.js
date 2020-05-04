/* Create a function that takes an integer N and returns a NxN spiral matrix */
function matrix(n) {
    // create empty array of arrays called 'results'
    // create a counter variable starting at 1
    // create variables for start/end columns and rows
    // as long as (start column <= end column) AND (start row <= end row)
        // loop from start column to end column
            // at results[start_row][i] assign counter variable
            // increment counter
        // increment start row
        // loop from start row to end row
            // at results[i][end_column] assign counter variable
            // increment counter
        // decrement end column
        // ... repeat for other two sides
    const results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    let counter = 1
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1
    while (startColumn <= endColumn && startRow <= endRow){
        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter
            counter++
        }
        startRow++
        // right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter
            counter++
        }
        endColumn--
        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--
        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter
            counter++
        }
        startColumn++
    }
    return results
}

// resource for NxN spiral matrix:
// https://codereview.stackexchange.com/questions/213931/print-out-n-by-n-spiral-matrix-in-javascript  

/* Given a 2D array, print it in spiral form */
// ES6 Solution
function spiral(matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            // remove && return 1st row
            ...matrix.shift(),
            // remove && return last element of the remaining rows
            ...matrix.map(a => a.pop()),
            // remove last row && return those elements in reverse order
            ...matrix.pop().reverse(),
            // remove 1st element of the remaining rows && return those elements in reverse order
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    return arr;
}

// resource for traversing matrix in spiral order: 
// https://stackoverflow.com/questions/30906366/spiral-traversal-of-a-matrix-recursive-solution-in-javascript
// https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/

/******* TEST CASE(S) *******/
matrix(4)
spiral([[1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]])