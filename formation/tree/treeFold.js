class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/* SYMMETRIC TREES */
function treeFoldSymmetric(root) {
  if (root) {
    combineSymmetric(root.left, root.right);
    root.right = null;
  }

  return root;
}

function combineSymmetric(left, right) {
  if (left && right) {
    left.val += right.val;

    combineSymmetric(left.left, right.right);
    combineSymmetric(left.right, right.left);
  }
}

/* ASYMMETRIC TREES */
function treeFold(root) {
  if (root) {
    combine(root.left, root.right);
    root.right = null;
  }
  return root;
}

function reverse(root) {
  if (!root) return;
  [root.left, root.right] = [root.right, root.left];
  reverse(root.left);
  reverse(root.right);
}

function combine(left, right) {
  if (left) {
    left.val += right ? right.val : 0;

    left.left = combine(left.left, right ? right.right : null);
    left.right = combine(left.right, right ? right.left : null);
    return left;
  }

  if (right) {
    reverse(right);
    return right;
  }

}

// tests
function compareTrees(a, b) {
  if (!a && !b) return true
   else if (!a || !b) return false
   else return a.val === b.val &&
    compareTrees(a.left, b.left) &&
    compareTrees(a.right, b.right)
}

let example = new Node(1,
  new Node(2,
    new Node(4),
    new Node(5)),
  new Node(3,
    new Node(6),
    new Node(7)))

let expectedFolded = new Node(1,
  new Node(5,
    new Node(11),
    new Node(11)))
console.log(compareTrees(treeFold(example), expectedFolded))

console.log(compareTrees(treeFold(null), null))

const single = new Node(1)
expectedFolded = new Node(1)
console.log(compareTrees(treeFold(single), expectedFolded))

const smallComplete = new Node(1,
  new Node(2),
  new Node(3))

expectedFolded = new Node(1,
  new Node(5))
console.log(compareTrees(treeFold(smallComplete), expectedFolded))

const symmetric1 = new Node(1,
  new Node(2, 
    new Node(4),
    null),
  new Node(3, 
    null, 
    new Node(7)))

expectedFolded = new Node(1,
  new Node(5, 
    new Node(11)))
console.log(compareTrees(treeFold(symmetric1), expectedFolded))

const symmetric2 = new Node(1,
  new Node(2,
    null,
    new Node(5)),
  new Node(3,
    new Node(6),
    null))

expectedFolded = new Node(1,
  new Node(5,
    null,
    new Node(11)))
console.log(compareTrees(treeFold(symmetric2), expectedFolded))

const leftOnly = new Node(1,
  new Node(2,
    new Node(4)))

expectedFolded = new Node(1,
  new Node(2,
    new Node(4)))
console.log(compareTrees(treeFold(leftOnly), expectedFolded))

const rightOnly = new Node(1,
  null,
  new Node(2, 
    null,
    new Node(4)))

expectedFolded = new Node(1,
  new Node(2,
    new Node(4)))
console.log(compareTrees(treeFold(rightOnly), expectedFolded))

const rightElbow = new Node(1,
  null,
  new Node(2,
    new Node(4)))

expectedFolded = new Node(1,
  new Node(2,
    null,
    new Node(4)))
console.log(compareTrees(treeFold(rightElbow), expectedFolded))