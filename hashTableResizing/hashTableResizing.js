/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};



var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  var resize = function(storage){
    if (size > 0.75*storageLimit){
      storageLimit = storageLimit*2;
    }
    if (size < 0.25*storageLimit){
      storageLimit = Math.floor(storageLimit*0.5);
    }
  }

  result.insert = function(k, v) {
    // TODO: implement `insert`
    var index = getIndexBelowMaxForKey(k, storageLimit);
    var bucket = storage.get(index) || [];

    for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    }

    bucket.push([k,v]);
    storage.push(index,bucket);
    size++;
    resize(storage);
    return undefined;
    }
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
   }
  return undefined;
  };

  result.remove = function(key) {
    // TODO: implement `remove`

  var index = getIndexBelowMaxForKey(k, storageLimit);

  var bucket = storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      resize(storage);
      }
      return tuple[1];
    }
  }
  return undefined;
};

var result = makeHashTable.insert('cat','lulu');
console.log(result);