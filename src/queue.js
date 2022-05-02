const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.Queue = null;
  }
  getUnderlyingList() {
    return this.Queue;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if(!this.Queue) {
      this.Queue = newNode;
    } else {
      let current = this.Queue;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  dequeue() {
    let queue = this.Queue;
    let topElement = queue.value;
    this.Queue = queue.next;
    return topElement;
  }
}

module.exports = {
  Queue
};
