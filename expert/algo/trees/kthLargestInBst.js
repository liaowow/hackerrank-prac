class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(numOfNodeVisited, latestVisitedNodeValue) {
    this.numOfNodeVisited = numOfNodeVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}
// O(h + k) time, O(h) space
function findKthLargestValueInBst(tree, k) {
  let treeInfo = new TreeInfo(0, null)
  reverseInOrderTraverse(tree, k, treeInfo)
  return treeInfo.latestVisitedNodeValue;
}

function reverseInOrderTraverse(node, k, treeInfo) {
  if (node === null || treeInfo.numOfNodeVisited >= k) return;

  reverseInOrderTraverse(node.right, k, treeInfo)
  if (treeInfo.numOfNodeVisited < k) {
    treeInfo.numOfNodeVisited++
    treeInfo.latestVisitedNodeValue = node.value
    reverseInOrderTraverse(node.left, k, treeInfo)
  }
}