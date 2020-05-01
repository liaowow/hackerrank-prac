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

// ES6
function spiral(matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...matrix.pop().reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    return arr;
}