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

// alt implementation via Codecademy
function sieveOfEratosthenes2(limit) {
  // 1a. Create an array of all integers from 2 to n
  // 1b. Set all elements of the array to true, except for 1st and 2nd element
  const intArr = new Array(limit + 1).fill(true)
  intArr[0] = false
  intArr[1] = false

  // 2a. Starting with 2, iterate through the array. If the current element is true, it is still considered prime. Since we know that all multiples of that number are NOT prime, iterate through all multiples of that number up to n and set them equal to false
  // 2b. Change the current element to the next non-false index
  for (let i = 2; i < intArr.length; i++) {
    if (intArr[i]) {
      for (let j = i * 2; j < intArr.length; j = j + i) {
        intArr[j] = false
      }
    }
  }

  // 3. Return the corresponding number value for any element still marked as prime (value of true)
  let result = []
  for (let i = 0; i < intArr.length; i++) {
    if (intArr[i]) {
      result.push(i)
    }
  }
  return result
}

// Codecademy's optimized solution
function sieveOfEratosthenesOptimized(limit) {
  // edge case
  if (limit <= 1) {
    return []
  }

  const intArr = new Array(limit + 1).fill(true)
  intArr[0] = false
  intArr[1] = false

  // Iterate up to the square root of the limit
  for (let i = 2; i < Math.pow(limit, 0.5); i++) {
    if (intArr[i]) {
      // Mark all multiples of i as non-prime
      for (let j = Math.pow(i, 2); j < intArr.length; j = j + i) {
        intArr[j] = false
      }
    }
  }

  // Remove non-prime numbers
  return intArr.reduce((primes, current, idx) => {
    if (current) {
      primes.push(idx)
    }
  }, [])
}