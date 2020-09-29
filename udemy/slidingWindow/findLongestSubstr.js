function findLongestSubstring(str) {
  let longest = 0
  let lookup = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    // if found a repeated char, set the startingIdx to the idx right after the same char that first appears
    if (lookup[char]) {
      start = Math.max(start, lookup[char])
    }
    
    longest = Math.max(longest, i - start + 1)
    lookup[char] = i + 1
  }

  return longest
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
    console.log(lookup)
    console.log("left", left)
    console.log("right", right)
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