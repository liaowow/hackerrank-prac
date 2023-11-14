class LinkedList {
  constructor() {
      this.head = null
  }

  insertFirst(data) {
      this.head = new Node(data, this.head);
  }

  size() {
      let count = 0
      let node = this.head
      while (node) {
          count++
          node = node.next
      }
      return count
  }

  getFirst() {
      return this.head
  }

  getLast() {
      if (!this.head) {
          return null
      }

      let currentNode = this.head
      while (currentNode) {
          if (!currentNode.next) {
              return currentNode
          }
          currentNode = currentNode.next
      }
  }

  clear() {
      this.head = null
  }

  removeFirst() {
      if (!this.head) {
        return;
      }
  
      this.head = this.head.next;
  }

  removeLast() {
      // edge case #1: when there's no node
      if (!this.head) {
          return
      }
      // edge case #2: when there's only 1 node
      if (!this.head.next) {
          this.head = null
          return
      }

      let previous = this.head
      let node = this.head.next
      /* My solution */
      while (node) {
          if (!node.next) {
              previous.next = null
          }
          previous = node
          node = previous.next
      }
      /* tutorial */
      // while (node.next) {
      //     previous = node
      //     node = node.next
      // }
      // previous.next = null
  }

  insertLast(data) {
    let currentLastNode = this.getLast()

    if (currentLastNode) {
      currentLastNode.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(idx) {
    // edge case#1: the chain is empty (actually, edge case#2 solution takes care of it)
    if (!this.head) {
        return null
    }

    let counter = 0
    let node = this.head
    while (node) {
        if (counter === idx) {
            return node
        }
        node = node.next
        counter++
    }
    // edge case#2: idx doesn't exist in this chain
    return null
  }

  removeAt(idx) {
    /* tutorial */
    if (!this.head) {
      return
    }

    if (idx === 0) {
        this.head = this.head.next
    }

    const prevNode = this.getAt(idx - 1)
    // edge cases: when idx is out of bounds
    if (!prevNode || !prevNode.next) {
        return
    }
    prevNode.next = prevNode.next.next

    /* my solution, less performant */
    // if (!this.head) {
    //   return
    // }
    
    // let prevNode = this.getAt(idx - 1)
    // let nextNode = this.getAt(idx + 1)
    
    // if (idx === 0) {
    //   this.head = nextNode
    //   return
    // }
    
    // prevNode.next = nextNode
  }

  insertAt(data, idx) {
    /* my solution: did not pass 1 case (out-of-bounds index) */
    // let newNode = new Node(data)
    // let currentNode = this.getAt(idx)
    // let prevNode = this.getAt(idx - 1)

    // if (idx === 0 || !this.head || !prevNode) {
    //     newNode.next = this.head
    //     this.head = newNode
    //     return
    // }

    // prevNode.next = newNode
    // newNode.next = currentNode
    
    /* tutorial */
    // case 1: when the list is empty
    if (!this.head) {
        this.head = new Node(data)
        return
    }
    // case 2: when inserting at idx 0
    if (idx === 0) {
        this.head = new Node(data, this.head)
        return
    }
    // case 3: when inserting at middle idx
    let prevNode = this.getAt(idx - 1)
    // case 4: when idx is out of bounds, prevNode would be null, so assign it as the last node
    if (!prevNode) {
        prevNode = this.getLast()
    }
    /* refactoring line 174~178:
    const prevNode = this.getAt(idx - 1) || this.getLast()
     */
    // create a new node whose next node is prevNode's next node
    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
  }

  forEach(fn) {
    let currNode = this.head
    let counter = 0
    while (currNode) {
      fn(currNode, counter)
      currNode = currNode.next
      counter++
    }
  }

  // define generator function
  *[Symbol.iterator]() {
    let currentNode = this.head
    while (currentNode) {
        yield currentNode
        currentNode = currentNode.next
    }
  }
}

module.exports = { Node, LinkedList };

// 2023/10/25 Concept Drill with Temi
/* on popping and pushing in O(1) time using Linked List

head = null
tail = null

add(1)

head = 1
tail = 1
 add(2)

 head = 1
 tail = 2

 pop -> dummy = head, head  = head.next, return dummy
 push -> tail.next = new node(item pushed), tail = tail.next


 1 -> 2 -> 3
      4 -> 4
 1 -> 6 -> 7

sum the numbers up : without casting to a number i.e. add in place and return a linked list representing the result

function (heada, headb) -> headc
*/


//// 2023/10/26 Core Algo - need more prac:
/**
 * 1 - Append an element (+recursive)
 * 2 - Remove all elements with a target value
 * 3 - Insert a target element in sorted list (+recursive)
 * 4 - Find middle element (in even-number list, note the diff of first middle vs. second middle)
 * 5 - Find Kth element from end of list
 * 6 - Sum two lists of equal length
 * 7 - Reverse a list
 * 8 - Swap nodes in pairs
 */
class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

function arrayify(head) {
  let ptr = head
  var array = []
  while (ptr != null) {
      array.push(ptr.value)
      ptr = ptr.next
  }
  return array
}

// Append an element
function append(head, target) {
  if (!head) {
    return new ListNode(target);
  }

  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }

  curr.next = new ListNode(target);
  return head;

}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(arrayify(append(null, 1))) // [1]
console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
console.log(arrayify(append(new ListNode(), 7))) // [0, 7]

// Remove all elements with a target value
function remove(node, target) { 
  if (!node) return node;

  const dummy = new ListNode(0, node);
  let curr = dummy;
  while (curr && curr.next) {
    if (curr.next.value === target) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
}
// Test Cases
var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
var LL2 = remove(null, 1);
console.log(arrayify(LL2)) // []
LL1 = remove(LL1, 1);
console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 
LL1 = remove(LL1, 2);
console.log(arrayify(LL1)) // [4, 3]
LL1 = remove(LL1, 3);
console.log(arrayify(LL1)) // [4]
LL1 = remove(LL1, 4);
console.log(arrayify(LL1)) // []

// Insert a target element in sorted list
function insert(head, target) {
  if (!head) return new ListNode(target)

  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let node = dummyHead

  while (node) {
    if (!node.next || target < node.next.value) {
      const next = node.next;
      node.next = new ListNode(target);
      node.next.next = next;
      break;
    }

    node = node.next;
  }

  return dummyHead.next;
}
// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
console.log(arrayify(insert(null, 1))) // [1]

// Find middle element
function findMiddle(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}
// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
var LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
console.log(findMiddle(null)) // null
console.log(findMiddle(LL1)) // 3
console.log(findMiddle(LL2)) // -13
console.log(findMiddle(LL3)) // 2
console.log(findMiddle(new ListNode(1))) // 1

// Find Kth element from end of list
function kthFromLast(head, k) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    if (fast) {
      fast = fast.next;
    } else {
      return -1;
    }
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.value;
}
// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1

// Sum two lists of equal length
function sumTwoLL(head1, head2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;

  while (head1) {
    curr.next = new ListNode(head1.value + head2.value);
    curr = curr.next;
    head1 = head1.next;
    head2 = head2.next;
  }

  return dummyHead.next;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
console.log(arrayify(sumTwoLL(LL1, LL2))) // [0, 6, -5]
console.log(arrayify(sumTwoLL(new ListNode(0), new ListNode(0)))) // [0]

function reverse(head) {
  let prev;
  let curr = head;
  while (curr) {
    [curr.next, curr, prev] = [prev, curr.next, curr];
  }

  return prev;
}

function reverseMethod2(head) {
  // via https://www.youtube.com/watch?v=hMnwCgnfND4
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev;
}

function reverseRecursive(head) {
  if (!head || !head.next) return head;

  let reversedHead = reverseRecursive(head.next);

  head.next.next = head;
  head.next = null;

  return reversedHead;
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverse(new ListNode(1)))) // [1]
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13]

// Swap nodes in pairs
function swapPairs(head) {
  // create dummy node and points to head
  let dummy = new ListNode(0, head);

  // create temp variables for head and dummy
  let prev = dummy;
  let curr = head;

  // traverse the list while pair exists (curr && curr.next)
  while (curr && curr.next) {
    // save pointers
    let second = curr.next;
    let nextPair = curr.next.next;
    
    // make the swap
    second.next = curr;
    curr.next = nextPair;
    prev.next = second;
    
    // update prev & curr pointers to move forward
    prev = curr;
    curr = nextPair;

  }

  // return updated list
  return dummy.next;
}