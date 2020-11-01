function finalInstances(instances, avgUtil) {
  const upperLimit = 2 * Math.pow(10, 8)
  for (let i = 0; i < avgUtil.length; i++) {
    const currUtil = avgUtil[i]
    if (currUtil < 25 && instances > 1) {
      instances = Math.ceil(instances / 2)
      i += 10
    }
    if (currUtil > 60 && (instances * 2) < upperLimit) {
      instances *= 2
      i += 10
    }
  }
  return instances
}

finalInstances(1, [5, 10, 80])
finalInstances(5, [30, 5, 4, 8, 19, 89])


function largestArea(samples) {
  if (!samples.length) return 0

  let largest = 0
  const memo = [...Array(samples.length)].map(arr => Array(samples[0].length))

  for (let i = 0; i < samples.length; i++) {
    for (let j = 0; j < samples[0].length; j++) {
      if (i === 0 || j === 0) {
        if (samples[i][j] === 1) {
          memo[i][j] = 1
          largest = Math.max(largest, memo[i][j])
        } else {
          memo[i][j] = 0
        }
      } else {
        if (samples[i][j] === 1) {
          memo[i][j] = Math.min(memo[i][j - 1], memo[i - 1][j], memo[i - 1][j - 1]) + 1
          largest = Math.max(largest, memo[i][j])
        } else {
          memo[i][j] = 0
        }
      }
    }
  }

  return largest
}