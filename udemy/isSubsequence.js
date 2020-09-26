/* Iterative approach: O(n + m) time, O(1) space */
function isSubsequence(str1, str2) {
  let str1Idx = 0
  let str2Idx = 0

  if (str1.length > str2.length) return false

  if (!str1) return true

  while (str2Idx < str2.length) {
    if (str1[str1Idx] === str2[str2Idx]) {
      str1Idx++
    } 
    
    if (str1Idx === str1.length) return true

    str2Idx++
  }

  return false
}

/* Recursive approach: O(n + m) time, O(n + m) space */
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1)) 
}

// test cases
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'cba') // false