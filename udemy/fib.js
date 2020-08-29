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

/* SOLUTION#1 -- iterative, initiates array with first two elements */
// runtime complexity is linear, O(n)
function fib1(n) {
    const result = [0, 1]
    
    for (let i = 2; i <= n; i++) {
        const a = result[i - 1]
        const b = result[i - 2]
        result.push(a + b)
    }
    
    return result[n]
}

/* SOLUTION#2 -- recursive */
// runtime complexity is exponential, O(2^n):
// for every additional element, we are getting a dramatic increase of operations
function fib2(n) {
    if (n < 2) {
        return n
    }

    return fib2(n - 1) + fib2(n - 2)
}

/* SOLUTION#3 -- Use MEMOIZATION to improve the recursive case:
Store the argument of each function call along with the result.
If the function is called again with the same args, 
return the precomputed results (instead of running the funciton again).
*/

// create a memoizer to speed up fib function
function memoize(fn) {
    // create cache for quick lookup:
        // key is argument we are passing in slowFib fn
        // value is result of the function call
    const cache = {}

    // if only 1 arg
    return function(x) {
        // caching mechanism -- this function is already cached
        if (cache[x]) {
            return cache[x]
        }
        // if not cached, save the result of the fn and cache it
        const result = fn(x)
        cache[x] = result
        return result
    }

    // if multiple args
    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }

        const result = fn(...args)
        // const result = fn.apply(this, args)
        cache[args] = result
        return result
    }

}

function slowFib(n) {
    if (n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

fib = memoize(slowFib)


/* Another way to memoize (via Codecademy) */
const memo = {}
function fibo(n) {
    let val;
    if (memo[n]) {
        val = memo[n]
    } else if (n === 0 || n === 1) {
        val = n
    } else {
        val = fibo(n - 1) + fibo(n - 2)
        memo[n] = val
    }
    return val
}

/* Optimized space complexity (via AlgoExperts) */
// O(n) time, O(1) space
function fibExpert(n) {
    let lastTwo = [0, 1]
    
}