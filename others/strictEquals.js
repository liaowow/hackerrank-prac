function strictEquals(a, b) {
  if (Object.is(NaN, a)) {
    return false
  }
  if (
    (Object.is(a, 0) && Object.is(b, -0) ||
    (Object.is(a, -0) && Object.is(b, 0)))
  ) {
    return true
  }
  return Object.is(a, b)
}

function strictEqualsDanAbramov(a, b) {
  if (Object.is(a, b)) {
    // check if one is NaN
    if (Object.is(a, NaN)) {
      return false
    } else {
      return true
    }
  } else {
    // check if they are 0 and -0
    if (
      (Object.is(a, 0) && Object.is(b, -0)) ||
      (Object.is(a, -0) && Object.is(b, 0))
    ) {
      return true
    } else {
      return false
    }
  }
}