// time O(2^n), where n is the number of nodes
// space O(n), where n is the number of nodes
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// memoization: use object where key:value is fn argument:return value
// time O(n), where n is the number of nodes
// space O(n), where n is the number of nodes
const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.time('duration')
console.log(fibMemo(17))
console.timeEnd('duration')