// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // check if current node in the recursive case is in the right place
  if (max !== null && node.data > max) {
    return false
  } 

  if (min !== null && node.data < min) {
    return false
  }

  // check if children exist and, if so, validate the data inside children
  if (node.left && !validate(node.left, min, node.data)) {
    return false
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false
  }

  return true
}

/* from leetcode */
var isValidBST = function(root) {   

  return helper(root, null, null);
};


function helper(root, min, max) {

  if (!root) {
      return true; // We hit the end of the path
  }

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false; // current node's val doesn't satisfy the BST rules
    }

  // Continue to scan left and right
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);

};

module.exports = validate;
