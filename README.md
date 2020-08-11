# Overview

**Algorithm**: A set of instructions for accomplishing a task.

**Asymptotic Notation** describes the runtime of a program. The three types of asymptotic notation are:
- big Theta(Θ): describes the runtime if the runtime of the program is the **same in every case** 
- big Omega(Ω): describes the **best-case** running time of a program
- big O(O): describes the **worst-case** running time of a program 

**Big O notation**: A theoretical measurement of the *time* and *space* complexity of your algorithm/data sturcture. It's a convenient way to describe how fast a function is growing (reference [here](https://yourbasic.org/algorithms/big-o-notation-explained/)).

**Big O time** is the language and metric we use to describe the efficiency of algorithms.


## Runtime Complexity

Describes the performance of an algorithm. How much more processing power/time is required to run your algorithm if we increase the inputs?
- O(1) | **Constant** Runtime
    - no matter how many elements we're working with, the algo/operation will always take the same amount of time
        - e.g. array lookup, hash table insertion

- O(n) | **Linear** Runtime
    - iterate through all elements in a collection of data. If you see a for loop spanning from `0` to `array.length`, you probably have 'n', or linear runtime.
        - e.g. a for-loop; printing the elements in an array

- O(log(n)) | **Logarithmic** Runtime
    - you have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that **searching** operations are `log(n)`. 
        - e.g. binary search
        - e.g. searching through a sorted array of data
        - e.g. find somebody in a telephone directory that has one million names listed

- O(n * log(n)) | **Quasilinear** Runtime
    - you have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that **sorting** operations are `log(n * log(n))`.

- O(n ^ 2) | **Quadratic** Runtime
    - 'The handshake problem', where every element in the collection has to be compared to every other element.
        - e.g. nested for-loops
        - e.g. a bubble sort
        - e.g. comparing 2 integer lists against each other

- O(2 ^ n) | **Exponential** Runtime
    - if you add a **single** element to the collection, the required processing power doubles. 
        - e.g. Fibonacci  
        - e.g. traveling salesperson problem using *dyanmic programming*      
        - e.g. [Power Set](https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/#Power-Set): finding all the subsets on a set

- O(n!) | **Factorial** Runtime
    - multiplication of all positive integer numbers less than itself. 
        - e.g. permutations of a string
        - e.g. solving the traveling salesperson problem with a *brute-force search*

### Identifying Runtime Complexity
- Iterating with a simple for loop through a single collection?
    - probably **O(n)**
- Iterating through half a collection?
    - Still **O(n)**. There are no constants in runtime.
- Iterating through 2 *different* collections with separate for loops?
    - **O(n + m)**
- 2 nested for loops iterating over the same collection?
    - **O(n ^ 2)**, or **O(n * n)**
- 2 nested for loops iterating over 2 *different* collections?
    - **O(n * m)**
- Sorting?
    - **O(n * log(n))**
- Searching a sorted array?
    - **O(log(n))**

## Data Structure

Some way of organizing info/data in your program with optimal **runtime complexity** for adding or removing records.

JavaScript natively implements several data structures.

### Node: An individual part of a larger data structure

Nodes are a basic data structure which contain data and one or more links to other nodes. Nodes can be used to represent a `tree structure` or a `linked list`. In such structures where nodes are used, it is possible to traverse from one node to another node.

### Linked List

A linked list is a `linear` data structure where elements are not stored at contiguous location. Instead the elements are linked using pointers.

In a linked list, data is stored in nodes and each node is linked to the next and, optionally, to the previous. 

Each node in a list consists of the following parts: 
1) data 
2) A pointer (Or reference) to the next node 
3) Optionally, a pointer to the previous node

### Queue

A queue is a `linear` data structure which contains an ordered set of data. Queues are a First In, First Out or `FIFO` structure.

Queues provide three methods for interaction:
- `Enqueue`: adds data to the “back” or end of the queue
- `Dequeue`: provides and removes data from the “front” or beginning of the queue
- `Peek`: reveals data from the “front” of the queue without removing it

### Stack

A stack is a `linear` data structure that follows a Last In, First Out (`LIFO`) protocol. Every stack has a size that determines how many nodes it can accomodate.

The stack data structure has three main methods: 
- `push()`: adds a node to the top of the stack
- `pop()`: removes a node from the top of the stack
- `peek()`: returns the value of the top node without removing it from the stack

### Hash Table

`Hash Table` is a data structure that organizes data using `hash functions` in order to support **quick insertion** and **search**.

There are two kinds of hash tables:
1. HashSet: one of the implementations of a `set` data structure to store **no repeated** values.
2. HashMap: one of the implementations of a `map` data structure to store `(key, value)` pairs.
    - Built on top of an **array** using a special **indexin**g system.
    - A key-value storage with fast assignments and lookup.
    - A table that represents a map from a set of keys to a set of values.
    - Each Hash Map key can be paired with only one value. However, different keys can be paired with the same value.

#### Principle of Hash Table

The key idea is to use a hash function to **map keys to buckets**:
1. When we insert a new key, the hash function will decide which bucket the key should be assigned and the key will be stored in the corresponding bucket, i.e. **hash bucket**.
2. When we want to search for a key, the hash table will use the **same** hash function to find the corresponding bucket and search only in the specific bucket.

#### Hash Functions

A hash function takes a string (or some other type of data) as input and returns an array index as output.

It is said to be **deterministic**. That means the hashing function must always return the same index when given the same key.

In order for our hash map implementation to guarantee that it returns an index that fits into the underlying array, the hash function will first compute a value using some scoring metric: this is the hash value, hash code, or just the hash. Our hash map implementation then takes that hash value **mod (%)** the size of the array.

This guarantees that the value returned by the hash function can be used as an index into the array we’re using.

Therefore, hash functions greatly reduce any possible inputs (any string you can imagine) into a much smaller range of potential outputs (an integer smaller than the size of our array). For this reason hash functions are also known as **compression functions**.

Also, because of the compression, hashing is *not* a reversible process. With just a hash value it is impossible to know for sure the key that was plugged into the hashing function.

#### Resolving Hash Collisions

A hash collision occurs when our hash function produces the same hash for two different keys. There are several strategies for resolving collisions:
- Separate chaining: updating the underlying data structure. Instead of an array of values that are mapped to by hashes, it could be an array of linked lists.
    - The big O runtime of separate chaining is **O(n)**: The worst case would be that all elements in the hash map hashed to the same index and are in one linked list with the element you’re looking for at the end of the list. To find it, you would have to iterate through the list.
- Open addressing: sticking to the array as our underlying data structure, but continue looking for (**probing**) a new index to save our data if the first result of our hash function has a different key’s data.
    - The big O runtime of open addressing is also **O(n)**: When retrieving an element from a hash map that uses linear probing, the worst case would be if the element hashes to the first index, but is actually at the last index. You would then have to search through the entire array.


### Trees

Trees are a nonlinear data structure composed of nodes used for storing hierarchical data.

Each tree node typically stores a value and references to its child nodes.

There are two ways to describe the shape of a tree:
- Trees can be `wide`, meaning that each node has many children
- Trees can be `deep`, meaning that there are many parent-child connections with few siblings per node. 
Trees can be both wide and deep at the same time.

#### Node Root

In a tree data structure, the node that is not the child of any other node is called the `root` of the tree. 

A tree can only have one root.

#### Binary Search Tree

A binary search tree requires that the values stored by the left child are **less** than the value of the parent, and the values stored by the right child are **greater** than that of the parent.

Binary search performs the search for the target within a **sorted** array. Hence, to run a binary search on a dataset, it must be sorted prior to performing it.

Time complexity: `O(log(n))`

Implementation: Recursive
```js
function binarySearchRecursive(array, first, last, target) {
  let mid = (first + last) / 2
  // Base case: when we reach the last element
  if (first === last) {
      return null
  }
  
  if (target < array[mid]) {
    return binarySearchRecursive(array, first, mid, target);  
  } else {
    return binarySearchRecursive(array, mid, last, target);
  }
}
```

Implementation: Iterative
```js
function binSearchIterative(target, array, left, right) {
  while(left < right) {
    let mid = (right + left) / 2
    if (target < array[mid]) {
      right = mid
    } else if (target > array[mid]) {
      left = mid
    } else {
      return mid
    }
  }
  return -1
}
```

## Resource
- [Grokking Algorithm](https://www.manning.com/books/grokking-algorithms)
- [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)
- [Big O Explained on freeCodeCamp](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)
- [LeetCode Explore](https://leetcode.com/explore)
- [Udemy Coding Interview Bootcamp](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)
- [Codecademy: Pass the Technical Interview with JavaScript](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/)
- [Time Complexity Analysis in JavaScript](https://www.jenniferbland.com/time-complexity-analysis-in-javascript/)
