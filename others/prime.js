/* Description: 
(1) isPrime(num) -> determine if a number is prime, return boolean value
(2) sieveOfEratosthenes(maxNum) -> print out all prime numbers up to maxNum
reference: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
*/

// Prime Number: a natural number greater than 1 that is only divisible by 1 and itself.

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return n > 1
}

function sieveOfEratosthenes(maxNum) {
  // 0. Create an empty array to store the results (all prime numbers up to maxNum)
  const primes = []
  // 1. Create a boolean array of maxNum + 1 positions (to represent the numbers 0 through maxNum)
  const isPrime = new Array(maxNum + 1).fill(true)
  // 2. Set positions 0 and 1 to false, and the rest to true
  isPrime[0] = false
  isPrime[1] = false
  // 3. Start at position p = 2 (the first prime number)
  for (let i = 2; i <= maxNum; i++) {
    if (isPrime[i] === true) {
      primes.push(i)

      let nextNum = i * i

      // 4. Mark as false all the multiples of i (that is, positions 2 * i, 3 * i, 4 * i... until you reach the end of the array)
      // 5. Find the first position greater than i that is true in the array. If there is no such position, stop. Otherwise, let i equal this new number (which is the next prime), and repeat from step 4
      while (nextNum <= maxNum) {
        isPrime[nextNum] = false
        nextNum += i
      }
    }
  }
  return primes
}