// O(n) time, where n is the number of each element AND subelements inside the array
// O(d) space, where d is the depth of the array
function productSum(arr, depth = 1) {
  let sum = 0
  for (let element of arr) {
    if (!Array.isArray(element)) {
      sum += element
    } else {
      sum += productSum(element, depth + 1)
    }
  }
  return sum * depth
}