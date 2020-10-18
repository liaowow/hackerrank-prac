function palindromicSubstring(str) {
  let maxSubStart = 0
  let maxSubLength = 0
  let maxPalinSub = ''

  for (let i = 0; i < str.length; i++) {
    const lengthCenteredAtChar = expandLength(str, i, i)
    const lengthCenteredAtSpace = expandLength(str, i, i + 1)
    const currLongestSub = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
    if (currLongestSub > maxSubLength) {
      maxSubLength = currLongestSub
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2)
    }
  }
  maxPalinSub = str.substr(maxSubStart, maxSubLength)
  if (maxPalinSub && maxPalinSub.length > 2) {
    return maxPalinSub
  } else {
    return 'none'
  }
}

function expandLength(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--
    right++
  }
  return right - left - 1
}

// alt solution
function longestPalindrome(str) {
  let longest = ''

  for (let i = 0; i < str.length; i++) {
    const currPalindrome = findLongestPalindrome(str, i, i)
    if (currPalindrome.length > longest.length) {
      longest = currPalindrome
    }
  }

  return longest.length > 2 ? longest : "none" 
}

function findLongestPalindrome(str, i, j) {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i--
    j++
  }
  return str.slice(i + 1, j)
}