class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// O(h) time, O(1) space
function findSuccessor(tree, node) {
  if (node.right !== null) return getLeftmostChild(node.right);
	return getRightmostParent(node);
}

function getLeftmostChild(node) {
	let currNode = node;
	while (currNode.left !== null) {
		currNode = currNode.left;
	}
	return currNode;
}

function getRightmostParent(node) {
	let currNode = node;
	while (currNode.parent !== null && currNode.parent.right === currNode) {
		currNode = currNode.parent;
	}
	return currNode.parent;
}