/* Begin by defining a Node class for the individual nodes in the binary tree,
 *  each containing a value and pointers for the left and right nodes.
 *  Following this, write an inorder function that receives a tree's root node as an argument
 *  and prints the node values in an inorder sequence.
 *
 * In Order = left, root, right
 * */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function insert(root, key) {
  // if no root or once a left or right leaf is hit with no node: create node and return it to current root branch
  if (!root) return new Node(key);

  // don't allow duplicates
  if (root.key === key) return root;

  if (key < root.key) {
    // if key to insert is less than current key, move left on tree
    root.left = insert(root.left, key);
  } else if (key > root.key) {
    // else if used instead of else to avoid infinite recursive loop
    // move right on tree
    root.right = insert(root.right, key);
  }
  // after recursion is complete, return root with insert
  return root;
}

// inOrder = left, root, right
// fn = (x) => array.push[x]
function inOrder(fn, root) {
  if (root.left) {
    inOrder(fn, root.left);
  }
  fn(root.key);
  if (root.right) {
    inOrder(fn, root.right);
  }
  //   if (root) {
  // recursively calls inOrder on next root and logs values as the tree is traversed
  // inOrder(root.left);
  // console.log(root.key);
  // inOrder(root.right);
  //   }
}

const root = new Node(5);

const valuesToInsert = [
  15, 25, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34,
];
valuesToInsert.map((value) => insert(root, value));
// console.log(root);

let sorted_array = [];

// pass fn to add discovered node to array and the created root
inOrder((x) => sorted_array.push(x), root);

console.log(sorted_array);

const test_array = [
  0, 1, 5, 11, 12, 13, 14, 15, 17, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50,
];

let res;

sorted_array.forEach(
  (_, i) => (res = sorted_array[i] === test_array[i] ? true : false)
);

console.log("Is inOrder?", res);
/* expect [
 *    0,  1,  5, 11, 12, 13, 14,
 *    15, 17, 21, 25, 28, 30, 31,
 *    33, 34, 35, 45, 50 ]
 */
