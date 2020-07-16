// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(newData) {
    if (newData < this.data && this.left) {
      // delegate newData to left-hand node
      this.left.insert(newData)
    } else if (newData < this.data) {
      this.left = new Node(newData)
    } else if (newData > this.data && this.right) {
      this.right.insert(newData)
    } else if (newData > this.data) {
      this.right = new Node(newData)
    }
  }

  contains(data) {

    if (this.data === data) {
      return this
    }

    if (data < this.data && this.left) {
      return this.left.contains(data)
    } else if (data > this.data && this.right) {
      return this.right.contains(data)
    } 
    
    return null
  }
}

module.exports = Node;
