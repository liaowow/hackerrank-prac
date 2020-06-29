// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = []
        this.count = 0 // initialize number of elements
    }

    push(record) {
        this.data[this.count] = record // assign the last element
        this.count += 1 // increase number of elements
    }

    pop() {
        const popped = this.data[this.count - 1] // keep record of last element
        delete this.data[this.count - 1] // remove the last element
        this.count -= 1 // decrement number of elements
        return popped
    }

    peek() {
        return this.data[this.count - 1]
    }
}