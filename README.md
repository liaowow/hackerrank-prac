# Overview

**Algorithm**: A set of instructions for accomplishing a task.

**Big O notation**: A theoretical measurement of the *time* and *space* complexity of your algorithm/data sturcture. It's a convenient way to describe how fast a function is growing (reference [here](https://yourbasic.org/algorithms/big-o-notation-explained/)).

**Big O time** is the language and metric we use to describe the efficiency of algorithms.

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