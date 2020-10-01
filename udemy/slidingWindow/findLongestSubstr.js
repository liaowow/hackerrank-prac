function findLongestSubstring(str) {
  let longest = 0
  let lookup = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (lookup[char]) {
      // we’ve hit a letter we’ve already seen before, let’s check its index in our hash to see if it’s a part of our “current” substring or not:
      // if the index in the hash is less than the index of the current start, then we know that character was from a previous substring earlier and isn’t a duplicate in our current substring, so our start stays the same and we keep going
      // but if the index is higher than the current start, that means it was in this substring and is a duplicate, so we set our new start value to that value and start over
      start = Math.max(start, lookup[char])
    }

    longest = Math.max(longest, i - start + 1)
    lookup[char] = i + 1
  }

  return longest
}

/* Sean's solution - using Set() */
function lengthOfLongestSubstring(str) {
  let a_pointer = 0;
  let b_pointer = 0;
  let max = 0;

  let charSet = new Set();

  while (b_pointer < str.length) {
      if (!charSet.has(str.charAt(b_pointer))) {
          charSet.add(str.charAt(b_pointer));
          b_pointer++;
          max = Math.max(charSet.size, max);
      } else {
          charSet.delete(str.charAt(a_pointer));
          a_pointer++;
      }
  }

  return max;
}

/* my solution - almost there! */
function findLongestSubstring(str) {
  let longest = 0
  let currLen = 0
  let lookup = {}
  let left = 0
  let right = 0

  if (!str) return 0

  while (right < str.length) {
    const char = str[right]
    if (lookup[char]) {
      lookup = {}
      left = right
    } else {
      lookup[char] = str.indexOf(char)
      right++
      currLen = right - left
      longest = Math.max(longest, currLen)
    }
  }

  return longest
}

// tests
findLongestSubstring('') // 0
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('longestsubstring') // 8