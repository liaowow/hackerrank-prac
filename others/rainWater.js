function naiveSolution(heights) {
  let totalWater = 0

  for (let i = 1; i < heights.length - 1; i++) {
    let leftBound = 0
    let rightBound = 0
    
    for (let j = 0; j <= i; j++) {
      leftBound = Math.max(leftBound, heights[j])
    }

    for (let j = i; j < heights.length; j++) {
      rightBound = Math.max(rightBound, heights[j])
    }

    totalWater += Math.min(leftBound, rightBound) - heights[i]
  }

  return totalWater
}

function optimizedSolution(heights) {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;

  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      if (heights[leftPointer] > leftBound) {
        leftBound = heights[leftPointer]
      }
        totalWater += leftBound - heights[leftPointer]
        leftPointer++
    } else {
      if (heights[rightPointer] > rightBound) {
        rightBound = heights[rightPointer]
      }
      totalWater += rightBound - heights[rightPointer]
      rightPointer--
    }
  }
  return totalWater
}