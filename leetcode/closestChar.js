function closestChar(str, query) {
  // create hashmap: key is char, val is an arr of idx
  // iterate through hashmap
    // if val includes query
      // compare distance between query and its two neighboring idx
        // if neighbor1Dist < neighbor2Dist, return neighbor 1
        // if neighbor2Dist < neighbor1Dist, return neighbor 2
        // else return neighbor1
    // else return -1

  let map = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!map[char]) {
      map[char] = [i]
    } else {
      map[char].push(i)
    }
  }

  for (let key in map) {
    let idxArr = map[key]

    if (idxArr.includes(query)) {
      let neighbor1 = idxArr[idxArr.indexOf(query) - 1]
      let neighbor2 = idxArr[idxArr.indexOf(query) + 1]
      let neighbor1Dist = Math.abs(query - neighbor1)
      let neighbor2Dist = Math.abs(query - neighbor2)

      if (neighbor2Dist < neighbor1Dist) {
        return neighbor2
      } else {
        return neighbor1
      }
    }
  }

  return -1

}

closestChar('babab', 2)
// -> 0
closestChar('hackerrank', 4)
// -> -1
closestChar('hackerrank', 1)
// -> 7
closestChar('hackerrank', 6)
// -> 5