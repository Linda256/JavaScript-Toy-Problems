/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
// set result = null; count = 0

// for each item in the arr,
      // loop the item, count the Occurrence of each item
// if the occrrence for that item is even, return result


  var result = null;
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      return arr[i];
    }
    count = 0;
  }
  return result;
};

// var arr = [1,1,7, 1,2, 4, 5, 6, 8, 9, 6, 4];
// var result = evenOccurrence(arr);
// console.log(result);
