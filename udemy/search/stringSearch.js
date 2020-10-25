// naive solution
function stringSearch(str, pattern) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break
      if (j === pattern.length - 1) count++
    }
  }
  return count
}

// KMP approach
// link: http://benwendt.ca/articles/the-knuth-morris-pratt-algorithm-implemented-in-javascript/

// bonus -- how indexOf() is implemented: https://gist.github.com/blasten/d42bd0d814b7df1addea