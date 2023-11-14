let stack = [];
stack.push("alpha");
stack.push("bravo");
stack.push("charlie");
console.log(stack.pop());

let queue = [];
queue.push("alpha");
queue.push("bravo");
queue.push("charlie");
console.log(queue.shift());

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function reverse(head) {
  let stack = [];

  let node = head;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let newHead = stack.pop();
  let prior = newHead;
  while (stack.length > 0) {
    let current = stack.pop();
    prior.next = current;
  }
  head.next = null;

  return newHead;
}


function rotateString(text, count) {
  let queue = text.split();

  for (let index = 0; index < count; index++) {
    queue.push(queue.shift());
  }

  return queue.join("");
}

class BinaryTreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*

         25
   15        35
10   20   30   40 

stack = [25P, 35P, 15P, 20P, 10P, 40P, 30P];
popped = [ 25, 15, 10, 20, 35, 30, 40 ]
node = 10
*/


function depthFirstSearch(root, target) {
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    if (!node) continue;

    if (node.value === target) return true;
    stack.push(node.right);
    stack.push(node.left);
  }

  return false;
}

/*
        25
   15        35
10   20   30   40 

queue = [25S, 15S, 35S, 10S, 20S, 30S, 40S]
shifted = [25, 15, 35, 10, 20, 30, 40]


*/

function breadthFirstSearch(root, target) {
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    if (!node) continue;

    if (node.value === target) return true;
    queue.push(node.left);
    queue.push(node.right);
  }

  return false;
}
