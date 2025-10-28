/*
'''
Given a binary search tree and a target value, return the in-order successor.
 

EXAMPLE(S)
     5 <--- root
  2     8
1  4   6  9


inorder traversal : 1 2 4 5 6 8 9 


inOrderSuccessor(root, 1) = 2
inOrderSuccessor(root, 2) = 4
inOrderSuccessor(root, 4) = 5
inOrderSuccessor(root, 5) = 6
inOrderSuccessor(root, 6) = 8
inOrderSuccessor(root, 8) = 9
inOrderSuccessor(root, 9) = null

three types of traversal : 
inorder : Left child -> Node -> Right child 
postorder : left child -> right child -> Node 
preorder :  Node -> left child -> right child 
 

Edge cases/Assumptions/Observations : 
- is it a balanced tree -> yes 
- balanced trees -> abs (height of left subtree for each node - height of right subtree for each node) <= 1 
- assume tree will not be null
- assume target will be in tree
- result can be null


Approach : 
# 1 
In Order - DFS
Binary search 
- go right if node is smaller than/equal to  target
- go left if node is greater than target update the successor 

Run through : 

     5 <--- root
  2     8
1  4   6  9

Case 1 : 
inOrderSuccessor(root, 1) = 2 

successor  = null

- we start at 5, compare 5 with 1 
successor = 5 
we move towards left of 5 , which brings us to 2 

- we compare 2 with 1
successor = 2
we move towards left of 2 , which brings us to 1 

- we compare 1 with 1 
- break out of the traversal 

Case 2:
inOrderSuccessor(root, 6) = 8

successor = null

- we start at 5, compare 5 with 6 
- go right because 5 < 6 

- we compare 8 with 6 
successor = 8 

- we compare 6 with 6 
- break out of the traversal 

Case 3: 
inOrderSuccessor(root, 5) = 6


- we compare 5 with 5 
- go right 

- we compare 8 with 5 
successor = 8 

- we compare 6 with 5 
successor = 6 

// property of BST : inorder traversal is going to give all the values in ascending order 


FUNCTION SIGNATURE
function inOrderSuccessor(root, target) {
def inOrderSuccessor(root: Node, target: int, successor=None) -> Node:
'''
*/


// Iterative 
function inOrderSuccessor(root, target) {
  let successor = null;
  while (root) {
    if (root.value > target) {
      successor = root;
      root = root.left;
    } else if (root.value <= target) {
      root = root.right;
    } 
  }
  return successor;
}

// O(Log(n))
// O(1)

// Recursive

function inOrderSuccessor(root, target) {
  let successor = null;

  function dfs(node) {
    if(!node) return;

    if(node.value > target) {
      // node value is greater than target, update successor and go left
      successor = node.value;
      dfs(node.left);
    } else if(node.value <= target) {
      // node value is smaller than target, go right
      dfs(node.right);
    } 
  }

  dfs(root);
  return successor;
}

// Follow up : 
// https://leetcode.com/problems/range-sum-of-bst/description/ 
// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/ 
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/ 
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/ 
