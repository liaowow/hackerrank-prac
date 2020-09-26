/* Frequency Counter approach */
function areThereDuplicates(arg) {
  const lookup = {}

  for (let val of arg) {
    lookup[val] = (lookup[val] || 0) + 1
  }

  for (let val in lookup) {
    if (lookup[val] > 1) {
      return true
    }
  }

  return false
}

/* Two-Pointer approach */
function areThereDuplicates(arg) {
  let curr = 0
  let next = 1

  arg.sort((a, b) => {
    if (typeof(a) === "number") {
      return a - b
    } else {
      if (a < b) {
        return -1
      } else if (a > b) {
        return 1
      } else {
        return 0
      }
    }   
  })

  while (next < arg.length) {
    if (arg[curr] === arg[next]) {
      return true
    } else {
      curr++
      next++
    }
  }

  return false
}

/* One-liner Set() approach */
function areThereDuplicates(arg) {
  return new Set(arg).size !== arg.length
}


// Test Cases
let arg = [1, 2, 3]
areThereDuplicates(arg) // false
arg = ['a', 'b', 'c', 'a']
areThereDuplicates(arg) // true