// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let counters = [0]
  let arr = [root, 'stopper']

  while (arr.length > 1) {
    // take out the first element in the array
    const node = arr.shift()
    // check if it's the stopper
    if (node === 'stopper') {
      // if so, put stopper back at the end of arr
      arr.push('stopper')
      // add another element in the counters, meaning we've started another width
      counters.push(0)
    } else {
      // if not, add the node's children to the end of arr
      arr.push(...node.children)
      // increment counter element at that width
      counters[counters.length - 1]++
    }

  }
  return counters

}

module.exports = levelWidth;
