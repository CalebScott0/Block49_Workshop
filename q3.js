// Regular Binary Tree - does not need to be BST
// do as BFS - count nodes

// [10,11,12,13,14,15,16] output = 7
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// Using BFS & queue
// const countNodes = (root) => {
//   // if no items
//   if (!root) return 0;

//   let q = [root],
//     count = 0;
//   // while items exist in tree
//   while (q.length) {
//     // current = first item left in queue
//     const curr = q.shift();
//     count++;
//     if (curr.left) {
//       q.push(curr.left);
//     }
//     if (curr.right) {
//       q.push(curr.right);
//     }
//   }
//   return count;
// };

// using recursion
const countNodes = (root) => {
  // at each leaf
  // 0 is returned for both left and right
  // giving that leaf (current root) a value of 1
  // in each parent/child subtree - return will be '1 + 1 + 1' if 2 children
  //                                  '1 + 0 + 1' or '1 + 1 + 0' if only 1 child
  //                                  '1 + 0 + 0' if no children
  if (!root) return 0;
  /* visits all left paths and then right paths
   * after full left subtree traversal,
   * l = # of elements returned in countNodes for left subtree*/
  let l = countNodes(root.left);
  let r = countNodes(root.right);
  // for each subtree, returns 1(root) + number of left + number of right
  return 1 + l + r;
};
const root = new Node(13);
root.left = new Node(11);
root.left.left = new Node(10);
root.left.right = new Node(12);
root.right = new Node(15);
root.right.left = new Node(14);
root.right.right = new Node(16);
console.log(countNodes(root)); // expect 7
