/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

var LinkedList = function() {
  //
  this.head=null;
  this.tail=null
  //return this
};

//write methods here!

LinkedList.prototype.addToTail = function(value
) {
  var newNode = this.makeNode(value);
  console.log(this);
  if (!this.head){
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next=newNode;
    this.tail=newNode;
  }
  //return this.tail.value
};

LinkedList.prototype.removeHead = function() {
  var temp=this.head;
  this.head=this.head.next;
  return temp.value;
};

LinkedList.prototype.contains = function(value
) {
  var currNode = this.head;
  while (currNode!==null){
    if (currNode.value===value) return currNode.value;
    else {
      currNode=currNode.next;
    }
  }
   return null;
};

LinkedList.prototype.makeNode = function(value
) {
  return (
  this.value=value,
  this.next=null
  )
};

var list = new LinkedList();
console.log(`this is the list tail  ${list.tail}`);         //yields 'null'
list.addToTail(4);
console.log(list);
//list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

