# Overview

**Algorithm**: A set of instructions for accomplishing a task.

**Big O notation**: A theoretical measurement of the *time* and *space* complexity of your algorithm/data sturcture. It's a convenient way to describe how fast a function is growing (reference [here](https://yourbasic.org/algorithms/big-o-notation-explained/)).

**Big O time** is the language and metric we use to describe the efficiency of algorithms.

## Runtime Complexity

Describes the performance of an algorithm. How much more processing power/time is required to run your algorithm if we increase the inputs?
- O(1) | **Constant** Runtime
    - no matter how many elements we're working with, the algo/operation will always take the same amount of time

- O(n) | **Linear** Runtime
    - iterate through all elements in a collection of data. If you see a for loop spanning from `0` to `array.length`, you probably have 'n', or linear runtime.

- O(log(n)) | **Logarithmic** Runtime
    - you have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that **searching** operations are `log(n)`. 
        - e.g. searching through a sorted array of data

- O(n * log(n)) | **Quasilinear** Runtime
    - you have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that **sorting** operations are `log(n * log(n))`.

- O(n ^ 2) | **Quadratic** Runtime
    - 'The handshake problem', where every element in the collection has to be compared to every other element.

- O(2 ^ n) | **Exponential** Runtime
    - if you add a **single** element to the collection, the required processing power doubles. 

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

## Hash Table

`Hash Table` is a data structure that organizes data using `hash functions` in order to support **quick insertion** and **search**.

There are 2 kinds of hash tables:
1. Hash set: one of the implementations of a `set` data structure to store `no repeated values`.
2. Hash map: one of the implementations of a `map` data structure to store `(key, value)` pairs.

### Principle of Hash Table

The key idea is to use a hash function to **map keys to buckets**:
1. When we insert a new key, the hash function will decide which bucket the key should be assigned and the key will be stored in the corresponding bucket.
2. When we want to search for a key, the hash table will use the **same** hash function to find the corresponding bucket and search only in the specific bucket.

## Resource
- [Grokking Algorithm](https://www.manning.com/books/grokking-algorithms)
- [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)
- [Big O Explained on freeCodeCamp](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)
- [LeetCode Explore](https://leetcode.com/explore)
- [Udemy Coding Interview Bootcamp](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)