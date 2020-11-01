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


}