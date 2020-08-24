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

/**
 Preorder:
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function preOrderTraversel(root) {
  let stack = []
  
  // We do not push the root node onto the stack if the root node is null. This way we will avoid going into the while loop when the root is null and just return an empty array as the result. 
  if (root !== null){
    stack.push(root)
  }

  // Initialize the result to an empty array 
  let res = [];

  // Keep iterating while there is something on the stack
  while (stack.length > 0) {
    const node = stack.pop();
    
    // Do the preorder processing
    res.push(node.val);
    
    // If there is a right child, push it onto the stack. 
    if (node.right !== null) {
        stack.push(node.right);
    }
    
    // If there is a left child, push it onto the stack. 
    if (node.left !== null) {
        stack.push(node.left);
    }
  }
  return res; 
}

 // resource: https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/177117/Simple-Iterative-Javascript-Solution