/* 
You will be given:
the total amount of weight you can carry (weightCap)
the weights of all of the items in an array (weights)
the values of all of the items in an array (values)
Your function should return the maximum value that you will be able to carry.
Example:
weightCap = 5 
weights = [1, 3, 5]
values = [250, 300, 500]
i = 3
*/

// recursive solution: O(2^n) time
function recursiveKnapsack(weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0
  } else if (weights[i - 1] > weightCap) {
    // The weight of the item we’re looking at exceeds weightCap, in which case we just move on, calling the function on the next item
    return recursiveKnapsack(weightCap, weights, values, i - 1)
  } else {
    const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1)
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1)
    return Math.max(includeItem, excludeItem)
  }
}

// dynamic programming solution: O(index * weight) time
function dynamicKnapsack(weightCap, weights, values) {
  const numItem = weights.length
  const matrix = new Array(numItem)
  for (let i = 0; i <= numItem; i++) {
    matrix[i] = new Array(weightCap + 1)
    for (let weight = 0; weight <= weightCap; weight++) {
      if (i === 0 || weight === 0) {
        matrix[i][weight] = 0
      } else if (weights[i - 1] <= weight) {
        const includeItem = values[i - 1] + matrix[i - 1][weight - weights[i - 1]]
        const excludeItem = matrix[i - 1][weight]
        matrix[i][weight] = Math.max(includeItem, excludeItem)
      } else {
        matrix[i][weight] = matrix[i - 1][weight]
      }
    }
  }
  return matrix[numItem][weightCap]
}