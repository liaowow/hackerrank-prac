class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

// O(n) time, O(n) space
function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0)
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lower, upper, preOrderTraversalValues, currSubtreeInfo) {
  if (currSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;
 
  const rootValue = preOrderTraversalValues[currSubtreeInfo.rootIdx]
  if (rootValue < lower || rootValue >= upper) return null;

  currSubtreeInfo.rootIdx++
  const leftSubtree = reconstructBstFromRange(lower, rootValue, preOrderTraversalValues, currSubtreeInfo)
  const rightSubtree = reconstructBstFromRange(rootValue, upper, preOrderTraversalValues, currSubtreeInfo)
  return new BST(rootValue, leftSubtree, rightSubtree);
}