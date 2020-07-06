// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
      this.data = data
      this.next = next
  }
}

class LinkedList {
  constructor() {
      this.head = null
  }

  insertFirst(data) {
      this.head = new Node(data, this.head);
  }

  size() {
      // let counter = 0;
      // let node = this.head;
  
      // while (node) {
      //   counter++;
      //   node = node.next;
      // }
  
      // return counter;
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
}

module.exports = { Node, LinkedList };
