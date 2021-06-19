class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(arr) {
    arr.push(this.name)
    for (let child of this.children) {
      child.depthFirstSearch(arr)
    }
    return arr;
  }
}