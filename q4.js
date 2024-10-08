// find leftmost node in last row of tree
// Level-Order - keep track of current level
class Tree_Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const node = (key) => {
  return new Tree_Node(key);
};

const searchBottomLeftValue = (root) => {
  // using level order search - track row of tree
  // add root to queue
  let q = [root];
  // return q[0].key;
  let bottom_left;
  // while their are items in the queue
  while (q.length) {
    // assign bottom left to current first position in queue
    bottom_left = q[0].key;
    let next_level = [];
    // traverse through tree levels L to R
    // and push the nodes of the next level to next_level array
    for (const node of q) {
      if (node.left) {
        next_level.push(node.left);
      }
      if (node.right) {
        next_level.push(node.right);
      }
    }
    // reassign q to the next level array
    // at the last row of tree, next_level will not have a length -> while loop will exit
    //
    q = next_level;
  }
  // bottom_left will hold the first (left most) value
  // of the last row in the tree
  return bottom_left;
};

const root = node(2);
root.left = node(1);
root.right = node(3);
root.left.left = node(4);
root.right.left = node(5);
root.right.left.left = node(6);
console.log(searchBottomLeftValue(root));
