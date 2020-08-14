/* My solution */
function destCity(paths) {
  // build a hashMap of departs and arrives
  // put all departs in an arr
  // loop over hashMap's values(arrives), if the value is not included in the arr, it's the destCity
  let map = {}
  for (let i = 0; i < paths.length; i++) {
    if (!map[paths[i][0]]) {
      map[paths[i][0]] = paths[i][1]
    }
  } 
  let departs = Object.keys(map)
  for (let key in map) {
    if (!departs.includes(map[key])) {
      return map[key]
    }
  }
}

/* alt solution */
function destCity2(paths) {
  // create variable: departs (as a Set)
  // loop over paths, add each path's 1st element to departsSet
  // loop over paths again, if each path's 2nd element is NOT included in the departsSet, we found our destCity
  let departs = new Set()
  for (let path of paths) {
    departs.add(path[0])
  }
  for (let path of paths) {
    if (!departs.has(path[1])) {
      return path[1]
    }
  }
}

destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])
// -> "Sao Paulo" 
destCity2([["B","C"],["D","B"],["C","A"]])
// -> "A"
