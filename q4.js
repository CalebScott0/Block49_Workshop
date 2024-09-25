// find leftmost node in last row of tree
// Level-Order - keep track of current level

// create Queue class and node class for Queue
class Queue_Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // if no value given
    if (!val) return null;

    const new_node = new Queue_Node(val);
    // if queue is currently empty
    if (!this.first) {
      this.first = new_node;
      this.last = new_node;
    } else {
      //   let temp = this.last;
      //   assign next pointer of current last to new node
      this.last.next = new_node;
      //   assign new_node into last place in queue
      this.last = new_node;
    }

    return ++this.size;
  }

  dequeue() {
    // if queue is empty
    if (this.isEmpty()) return null;

    const temp = this.first;
    // if only 1 item in queue
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      // assign new first item in queue
      this.first = this.first.next;
    }
    this.size--;
    return temp.value;
  }

  peek() {
    return this.first;
  }

  len() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const q = new Queue();
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// q.enqueue(5);
// // console.log(q.peek());
// // console.log(q.dequeue());
// // console.log("length", q.len());
// console.log(q.peek());
// console.log(q.last);

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
};

const root = node(2);
root.left = node(1);
root.right = node(3);
root.left.left = node(4);
root.right.left = node(5);
root.right.left.left = node(6);
console.log(root);
