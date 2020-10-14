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