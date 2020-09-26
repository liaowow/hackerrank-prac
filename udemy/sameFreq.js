function sameFrequency() {
  const counter = {}
  const stringA = String(a)
  const stringB = String(b)

  for (let digit of stringA) {
    counter[digit] ? counter[digit] += 1 : counter[digit] = 1 
  };

  for (let digit of stringB) {
    if (!counter[digit]) {
      return false
    } else {
      counter[digit]--
    }
  }
  return true
}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false