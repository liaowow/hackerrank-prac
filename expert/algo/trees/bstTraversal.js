// O(n) time, O(n) space
function inOrderTraverse(tree, arr) {
  if (tree !== null) {
    inOrderTraverse(tree.left, arr)
    arr.push(tree.value)
    inOrderTraverse(tree.right, arr)
  }
  return arr
}

function preOrderTraverse(tree, arr) {
  if (tree !== null) {
    arr.push(tree.value)
    preOrderTraverse(tree.left, arr)
    preOrderTraverse(tree.right, arr)
  }
  return arr
}

function postOrderTraverse(tree, arr) {
  if (tree !== null) {
    postOrderTraverse(tree.left, arr)
    postOrderTraverse(tree.right, arr)
    arr.push(tree.value)
  }
  return arr
}