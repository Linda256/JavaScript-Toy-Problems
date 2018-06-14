/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */

class Stack
  {
   constructor(){
    this.count=0;
    this.storage={};
   };
  // add an item to the top of the stack
   push (value) {
    this.storage[this.count]= value;
    this.count++;
  };

  // remove an item from the top of the stack
   pop() {
    if (this.count>0){
      delete.this.storage[this.count-1];
      this.count--;
    }
  };

  // return the number of items in the stack
   size() {
    return this.count;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function() {
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
  };
};
