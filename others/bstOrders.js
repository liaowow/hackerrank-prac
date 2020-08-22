/* Inorder:
In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node. Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.
*/

function findInOrderSuccessor(inputNode) {
  // If it exists, the right child node is the inorder successor of the inputNode
  if (inputNode.right) {
    inputNode = inputNode.right
    while (inputNode.left) {
      inputNode = inputNode.left
    }
    return inputNode
  }
  // If inputNode has no right child node, call its next greatest parent node. This means finding its parent until we find a node with a key that is greater than the current node’s key
  // If the inputNode has no right child node AND its key is greater than that of its parent, it has no inorder successor so it will return null
  if (!inputNode.right) {
    if (inputNode.key > inputNode.parent.key) {
      while (inputNode.parent && inputNode.parent.key < inputNode.key) {
        inputNode = inputNode.parent
      }
      return inputNode
    } else if (inputNode.parent.key > inputNode.key) {
      return inputNode.parent
    } else {
      return null
    }
  }
}

// resource: https://medium.com/swlh/how-to-solve-a-js-binary-search-tree-problem-585673fc3287