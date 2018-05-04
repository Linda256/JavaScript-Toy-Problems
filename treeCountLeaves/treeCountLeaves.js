
/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(){
  var newChild = new Tree();
  this.children.push(newChild);
  return newChild;
};

Tree.prototype.countLeaves = function () {
  var count = 0 ;
  function countL(currTree){
    if (!currTree.child){
      count++;
      return;
    }
    if (currTree.child){
      for (var i=0; i<currTree.child.length;i++){
        currTree=currTree.child[i]
        countL(currTree);
      }
    }

  }
  countL(this);
  return count;
};


