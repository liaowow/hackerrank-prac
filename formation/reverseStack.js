/*
'''
Reverse Stack In-Place

Given a stack, recursively reverse it using only standard-library operations for that data type. Your solution should be achieved in-place/using the input data structure.

For stacks, these are: push(), pop(), peek(), size().
 

EXAMPLE(S)
The stack [1, 9, 3, 4] should return [4, 3, 9, 1]
The stack [1] should return [1]
 

FUNCTION SIGNATURE
def reverseStackInPlace(stack)
'''
// EXPLORE
- can the input be empty?
- confirm data type?
- can we create a new stack and return it?

// BRAINSTORM
// PLAN
(iterative)
- create a temp stack, initiate as an empty array
- while input stack is not empty:
  - push element into temp stack by popping the input stack element
  return temp stack

(recursive)
- base case:
  - stack is empty
    - return
- recursive case:
   let item = inputStack.pop();
   reverseStackInPlace(inputStack)
   inputStack.push(item);
- combine:
*/



// IMPLEMENT - pair session solution
function reverseStackInPlaceWithTemp(stack, temp = []) {
  if (stack.length === 0) return;

  let item = stack.pop();
  temp.push(item);
  reverseStackInPlace(stack, temp);

  return temp;
}

// IMPLEMENT - group session with Daniel's office hour

// Given a stack and an element, place the element at the bottom of the stack.
function placeBackIntoStack(stack, elem) {
  if (stack.length === 0) {
    //console.log("base:", elem)
    stack.push(elem);
    return;
  }

  const top = stack.pop();
  //console.log("pop:", top);
  placeBackIntoStack(stack, elem);
  //console.log("push:", top);
  stack.push(top);
}

function reverseStackInPlace(stack) {
  if (stack.length === 0) {
    return;
  }

  const elem = stack.pop();
  console.log("pop:", elem);
  console.log("stack:", stack);
  reverseStackInPlace(stack);
  console.log("reversed:", stack);
  placeBackIntoStack(stack, elem);
  console.log("add to back:", stack);
}

reverseStackInPlace([1, 2, 3]);
