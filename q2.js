// do this as a BinarySearchTree class
// not node class like in q1 for practice
// pre order to check if equal
// check if arrays are equal at the end for both trees?

class BinarySearchTree {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  insert(key) {
    //   don't allow duplicates
    if (this.key === key) return;

    const direction = key < this.key ? "left" : "right";

    if (this[direction]) {
      this[direction].insert(key);
    } else {
      // once you hit branch with no leaf
      this[direction] = new BinarySearchTree(key);
    }
  }
}

const isSameTree = (root1, root2) => {
  // return true if same tree
  // use pre order - root, left, right

  //   both empty
  if (!root1 && !root2) return true;

  //   compare if both non empty
  if (root1 && root2)
    return (
      root1.key === root2.key &&
      isSameTree(root1.left, root2.left) &&
      isSameTree(root1.right, root2.right)
    );

  return false;
};

const root1 = new BinarySearchTree(5);
root1.left = new BinarySearchTree(2);
root1.right = new BinarySearchTree(10);
root1.left.right = new BinarySearchTree(3);
root1.right.left = new BinarySearchTree(7);
// root1.insert(10);
// root1.insert(2);
// root1.insert(3);
// root1.insert(7);

const root2 = new BinarySearchTree(5);
root2.right = new BinarySearchTree(10);
root2.left = new BinarySearchTree(2);
root2.right.left = new BinarySearchTree(7);
root2.left.right = new BinarySearchTree(3);
// root2.insert(10);
// root2.insert(7);
// root2.insert(2);
// root2.insert(3);

console.log(isSameTree(root1, root2)); // expect true
// console.log(root1);
// console.log(root2);
