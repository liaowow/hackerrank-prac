function nodeDepths(root) {
  let sum = 0
	const stack = [{node: root, depth: 0}]
	while (stack.length) {
		const {node, depth} = stack.pop()
		if (node === null) continue;
		sum += depth;
		stack.push({node: node.left, depth: depth + 1})
		stack.push({node: node.right, depth: depth + 1})
	}
	return sum;
}

function nodeDepthsRecursive(root, depth = 0) {
  if (root === null) return 0
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}