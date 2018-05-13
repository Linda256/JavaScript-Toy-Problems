/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory

// var sumArray = function(array) {
// var prevsum=0
// var maxsum=0
//   // loop through the array
//   //   currsum = prevsum + array[i]
//   //   if currsum >= prevsum
//   //     prevsum = currsum
//   //   else{
//   //     if (prevsum>maxsum) {
//   //         maxsum=prevsum
//   //        }
//   //     prevsum=0
//   //   }
//   let currsum
//   for (let i=0;i<array.length;i++){
//     currsum = prevsum + array[i];
//     //prevsum = currsum
//     if (currsum >= maxsum){
//         maxsum=currsum;
//         prevsum=currsum;
//     }
//     else{
//       if (prevsum>maxsum && array[i+1]>array[i]) {
//           maxsum=prevsum
//          }
//       prevsum=0
//     }
//   }
// return maxsum
// };

// var sumArray = function(array) {
// var prevsum=0
// var maxsum=0
//   // loop through the array
//   //   currsum = prevsum + array[i]
//   //   if currsum >= prevsum
//   //     prevsum = currsum
//   //   else{
//   //     if (prevsum>maxsum) {
//   //         maxsum=prevsum
//   //        }
//   //     prevsum=0
//   //   }
//   let currsum
//   for (let i=0;i<array.length;i++){
//     currsum = prevsum + array[i];
//     //prevsum = currsum
//     if ((array[i]<0 && array[i+1] >= array[i])|| array[i]>0){
//         prevsum=currsum;
//     }
//     if (maxsum<currsum){
//         maxsum=currsum;
//     }
//     else{
//       // if (prevsum>maxsum && array[i+1]>array[i]) {
//       //     maxsum=prevsum
//       //    }
//       prevsum=0
//     }
//   }
// return maxsum
// };

var sumArray = function(array) {

  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;

  for (var i = 0; i < array.length; i ++) {
    currentSum += array[i];

    if (maxSum < currentSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
  };

//var result = sumArray([1, 2, 3]);
//var result = sumArray([10, -11, 11]);
var result = sumArray([-10, -1, -5]);
console.log(result);