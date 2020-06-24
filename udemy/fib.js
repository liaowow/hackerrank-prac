// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* MY SOLUTION */
function fib(n) {
    let arr = Array(n + 1).fill(0)
    // print out fib series till i = n
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            arr[i] = 0
        } else if (i === 1) {
            arr[i] = 1
        } else {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
    }
    return arr[n]
}

