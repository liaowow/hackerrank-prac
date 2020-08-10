// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data)
  }

}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    const arr = [this.root] // pass in root element, turn it into an array
    // as long as there's an element in the arr...
    while (arr.length) {
      const node = arr.shift() // take out 1st element of the arr
      arr.push(...node.children) // take every element inside node's children and push them onto arr
      fn(node) // pass in the element and run the fn
    }
  }

  traverseDF(fn) {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift() // take out 1st element of the arr
      arr.unshift(...node.children) // take every element inside node's children and PREPEND them onto arr
      fn(node) // pass in the element and run the fn
    }
  }
}

/* Tree Node from Codecademy */
class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }
  
  removeChild(childToRemove) {
    const length = this.children.length;
    this.children = this.children.filter(child => {
      return childToRemove instanceof TreeNode
      ? child !== childToRemove
      : child.data !== childToRemove;
    });

    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove));
    }
  }

  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '-- ';
    }
    console.log(`${result}${this.data}`);
    this.children.forEach(child => child.print(level + 1));
  }
  
  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach(child => child.depthFirstTraversal());
  }
  
  breadthFirstTraversal() {
    let queue = [ this ];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
};