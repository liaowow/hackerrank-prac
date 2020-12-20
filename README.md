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

### Sorting Algorithms

#### Bubble Sort

Bubble sort is an introductory sorting algorithm that iterates through a list and compares **pairings** of adjacent elements.

For implementation, bubble sort takes an array of elements, and reorders the elements of the input from smallest to largest by comparing a pair of neighboring elements and swapping their positions in the array, so that the larger of the two elements is always on the right.

We implement the algorithm with two loops:
1. The first loop iterates as long as the list is unsorted and we assume it’s unsorted to start
2. Within this loop, another iteration moves through the list to check if the first element is larger than the second element

The algorithm only stops when there are no more values that need to be swapped.

It has a runtime of `O(n ^ 2)`.

#### Merge Sort

Merge Sort is the strategy that breaks the list-to-be-sorted into smaller parts, sometimes called a **divide-and-conquer** algorithm.

In a divide-and-conquer algorithm, the data is continually broken down into smaller elements until sorting them becomes really simple.

Merge sorting takes two steps: 
1. Splitting the data into **“runs”** or smaller components 
2. Re-combining those runs into sorted lists (the **“merge”**).

Merge sort was unique for its time in that the best, worst, and average time complexity are all the same: `Θ(n * log(n))`.

Merge sort also requires space. Each separation requires a temporary array, and so a merge sort would require enough space to save the whole of the input a second time. This means the worst-case **space** complexity of merge sort is `O(n)`.

Some sorts attempt to improve upon the merge sort by first inspecting the input and looking for “runs” that are already pre-sorted. 

[Timsort](https://en.wikipedia.org/wiki/Timsort) is one such algorithm that attempts to use pre-sorted data in a list to the sorting algorithm’s advantage. If the data is already sorted, Timsort runs in `Θ(n)` time.

JS 2-step implementations:
1. *Splitting the input array* – The algorithm recursively splits the input array until each element is in its own array. 
2. *Merging sorted arrays* – The algorithm compares and combines the elements of arrays until the input array is sorted.

#### Quicksort

Quicksort is an efficient recursive algorithm for sorting arrays or lists of values. The algorithm is a **comparison sort**, where values are ordered by a comparison operation such as > or <.

Quicksort uses a **divide and conquer** strategy, breaking the problem into smaller sub-problems until the solution is so clear there’s nothing to solve.

We choose a single *pivot* element from the list. Every other element is compared with the pivot, which partitions the array into three groups:
- A sub-array of elements **smaller than** the pivot.
- The pivot itself.
- A sub-array of elements **greater than** the pivot.

Elements in the “smaller than” group are **never** compared with elements in the “greater than” group.

Like merge sort, the input array is partitioned into smaller parts and then combined after the elements have been rearranged. 

Unlike merge sort, which requires additional memory for auxiliary arrays, quicksort is space-saving because it deploys **in-place sorting**.

Quicksort is an unusual algorithm in that the worst case runtime is O(n^2), but the average case is the same as merge sort: O(n * log(n)).

We typically only discuss the worst case when talking about an algorithm’s runtime, but for Quicksort it’s so uncommon that we generally refer to it as `O(n * log(n))`.

Like bubble sort, quicksort has a worst case runtime of O(n^2). This can happen when quicksort’s input data set comprises:
- pre-sorted numbers,
- backward-sorted numbers, or
- all similar elements along with a poorly chosen pivot element that produces a partition of zero or one element.

### Graphs

Graphs are the perfect data structure for modeling networks. 

They’re composed of **nodes**, or **vertices**, which hold data, and **edges**, which are a connection between two vertices.

Some key terms:
- `vertex`: A node in a graph.
- `edge`: A connection between two vertices.
- `adjacent`: When an edge exists between vertices.
- `path`: A sequence of one or more edges between vertices.
- `disconnected`: Graph where at least two vertices have no path connecting them.
- `weighted`: Graph where edges have an associated cost.
- `directed`: Graph where travel between vertices can be restricted to a single direction.
- `cycle`: A path which begins and ends at the same vertex.
- `adjacency matrix`: Graph representation where vertices are both the rows and the columns. Each cell represents a possible edge.
- `adjacency list`: Graph representation where each vertex has a list of all the vertices it shares an edge with.

#### Depth-First Graph Search

It continues down a path until it reaches the end. Employing either **recursion** or a **stack** data structure, it is helpful for determining if a path exists between two vertices. 

DFS has many applications, including topological sorting and detecting cycles, but one of the more interesting real-world applications is that it can be used to solve problems that have a **singular correct answer** (a path between the start state and end state), such as a sudoku exercise.

#### Breadth-First Graph Search

It checks the values of all neighboring vertices before moving into another level of depth.

This is an incredibly inefficient way to find just any path between two vertices, but it’s an excellent way to identify the **shortest path** between them. Because of this, BFS is helpful for figuring out directions from one place to another.

#### Graph Search Traversal Order

There are three main traversal orders that you’ll come across for graph traversal:
1. **Preorder**: each vertex is added to the “visited” list and added to the output list BEFORE getting added to the stack
2. **Postorder**: each vertex is added to the “visited” list and added to the output list AFTER it is popped off the stack
3. **Reverse Post-Order** (also known as **Topological Sort**), which returns an output list that is exactly the reverse of the post-order list

The runtime for graph search algorithms is `O(vertices + edges)`.

#### Dijkstra’s Algorithm

A method for finding the shortest distance from a given point to every other point in a **weighted** graph.

The algorithm works by keeping track of all the distances and updating the distances as it conducts a **breadth-first** search. A common application of this algorithm is to find the quickest route from one destination to another.

How it works:
1. Instantiate a **dictionary** that will eventually map vertices to their distance from the start vertex
2. Assign the start vertex a distance of `0` in a min heap
3. Assign every other vertex a distance of `infinity` in a min heap
4. Remove the vertex with the smallest distance from the min heap and set that to the current vertex
5. For the current vertex, consider all of its adjacent vertices and calculate the distance to them as `(distance to the current vertex) + (edge weight of current vertex to adjacent vertex)`.
6. If this new distance is **less than** the current distance, replace the current distance.
7. Repeat 4 and 5 until the heap is empty
8. After the heap is empty, return the distances

The runtime for Dijkstra’s algorithm run is `O((V+E)log V)`:
- In the worse case, we will visit `V+E` vertices and edges. 
- In each visit, we may have to update our min heap which takes `log V` time.

### Dynamic Programming
- An instance where we have a large problem, and we can decompose it into same, smaller problems



## Resource
- [Grokking Algorithm](https://www.manning.com/books/grokking-algorithms)
- [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)
- [Big O Explained on freeCodeCamp](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)
- [LeetCode Explore](https://leetcode.com/explore)
- [Udemy Coding Interview Bootcamp](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)
- [Codecademy: Pass the Technical Interview with JavaScript](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript/)
- [Time Complexity Analysis in JavaScript](https://www.jenniferbland.com/time-complexity-analysis-in-javascript/)
- [Dynamic Programming 5-hour YouTube Tutorial](https://www.youtube.com/watch?v=oBt53YbR9Kk)
