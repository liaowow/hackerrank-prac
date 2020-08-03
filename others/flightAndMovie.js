function flightAndMovie(arr, flightLength) {
  let map = {};

  arr.forEach(val => {
    map[val] = true
    let target = flightLength - val
    if (map[target]) {
      return true
    }
  })

  return false
}

flightAndMovie([20, 30, 140, 50], 160)
// flightLength 160
  // movies [80, 110, 40] => false
  // [80, 110, 80] => true
  // [20, 30, 110, 40, 50] => true