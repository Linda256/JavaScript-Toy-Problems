/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */

class Stack {

   constructor(){
    this.count=0;
    this.storage={};
   }

  // add an item to the top of the stack
   push (value) {
    this.storage[this.count]= value;
    this.count++;
  }

  // remove an item from the top of the stack
   pop() {
    if (this.count>0){
      let value = this.storage[this.count-1];
      delete this.storage[this.count-1];
      this.count--;
      return value;
    }
  }

  // return the number of items in the stack
   size() {
    return this.count;
  };
};

var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();
  this.inbox=inbox;
  this.outbox=outbox;
};
  // called to add an item to the `queue`
  Queue.prototype.enqueue  = function(item) {
    // TODO: implement `enqueue`
    this.inbox.push(item);
  };

  // called to remove an item from the `queue`
  Queue.prototype.dequeue = function(item) {
    //if outbox is empty, pop all items from inbox into outbox
    if (this.outbox.size()===0){
      while (this.inbox.size()>0){
        let temp = this.inbox.pop();
        this.outbox.push(temp);
      }
    }
    // pop an item from outbox
    let value = this.outbox.pop();
    return value;
  };

  // should return the number of items in the queue
 Queue.prototype.size = function() {
    return this.outbox.size() + this.inbox.size();
  };


// let s = new Stack();
// s.push(6);
// console.log(s);
// s.push(9);
// console.log(s.size());
// let result = s.pop();
// console.log(result);

// let q = new Queue()
// q.enqueue(8);
// q.enqueue(9);
// q.enqueue(5);
// console.log(q);
// let d = q.dequeue();
// console.log(q);
// console.log(d);
// let d2 = q.dequeue();
// console.log(d2);
// console.log(q.size());

