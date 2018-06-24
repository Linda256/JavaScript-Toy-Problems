/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * c // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

/*
O:arr
I:arr,
 1. are the items in the arr same datatype? all numbers? strings? mix? objects?
 2. how to compare mix?
C:
E:[]?


assume items are comparable

[6,8,2,1]
start at
    1s: [6,2,8,1] [6,2,1,8]
    2nd:
n = 0
while (n< arr.length)
    while (i < arr.length-1) compare arr[i], arr[i+1]
       if (arr[i] > arr[i+1]) swap
       else i++
    n++;
return arr;

*/
var bubbleSort = function(arr) {
  // Your code here.
  let n = 0;
  while (n< arr.length){
    let i=0;
    while (i < arr.length-1){
       (arr[i] > arr[i+1])? swap(arr, i, i+1) : i++;
    }
    n++;
  }
return arr;
};

var swap = function (arr, i, j){
  let temp = arr[i];
  arr[i]= arr[j];
  arr[j]=temp;
}

//let arr = [7,1,4,2];
let arr = [6,2,1,8];
let result = bubbleSort(arr);
console.log(result);
