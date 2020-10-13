/* Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1. */

// my solution: O(n^2) time, O(n) space
function firstUniqChar(str) {
  const lookup = {}
  for (let i = 0; i < str.length; i++) {
      const currChar = str[i]
      if (!lookup[currChar]) {
          lookup[currChar] = 1
      } else {
          lookup[currChar]++
      }
  }
  for (let key in lookup) {
      if (lookup[key] === 1) return str.indexOf(key)
  }
  return -1
}

