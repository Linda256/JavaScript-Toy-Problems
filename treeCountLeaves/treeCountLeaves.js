
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
// Tree.prototype.addChild = function(child){
//   if (!child || !(child instanceof Tree)){
//     child = new Tree(child);
//   }

//   if(!this.isDescendant(child)){
//     this.children.push(child);
//   }else {
//     throw new Error("That child is already a child of this tree");
//   }
//   // return the new child node for convenience
//   return child;
// };

// Tree.prototype.isDescendant = function(child){
//   if(this.children.indexOf(child) !== -1){
//     // `child` is an immediate child of this tree
//     return true;
//   }else{
//     for(var i = 0; i < this.children.length; i++){
//       if(this.children[i].isDescendant(child)){
//         // `child` is descendant of this tree
//         return true;
//       }
//     }
//     return false;
//   }
// };

Tree.prototype.countLeaves = function () {
  var count = 0 ;
  function countL(currTree){
    if (currTree.children.length === 0 ){
      return 1;
    }
    else {
      for (var i=0; i<currTree.children.length;i++){
        //currTree=currTree.children[i];
        count+=countL(currTree.children[i]);
      }
    }
  }
  countL(this);
  return count;
};

var root = new Tree();
    // add a branch
    var branch1 = new Tree();
    root.addChild(branch1);
    // add two leaves to the branch
    branch1.addChild(new Tree());
    branch1.addChild(new Tree());
    // add another branch
    var branch2 = new Tree();
    root.addChild(branch2);
    // add two leaves to the branch
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());
    var r =root.countLeaves();
    console.log(root);
    console.log (r);

