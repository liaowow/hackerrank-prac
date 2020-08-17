/* for loop */
function numToPower(num, power) {
  let total = 1

  for (let i = 0; i < power; i++) {
    total *= num
  }

  return total
}

/* while loop */
function numToPower2(num, power) {
  let total = 1

  while (power > 0) {
    total *= num
    power--
  }

  return total
}

/* recursion */
function numToPower3(num, power) {
  // base case: when power is 0
  if (power === 0) {
    return 1
  } else {
    // recursive: multiply num by itself with one less power point
    return num * numToPower3(num, power - 1)
  }
}