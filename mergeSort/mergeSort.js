/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
 * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
 * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
 * after the first merge, and so on.)
 *
 * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
 *
 * Illustration of an iterative approach:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Repeat merge step:
 *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
 *
 *   Repeat merge step:
 *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
 *
 *   Done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 * Illustration of a recursive approach:
 *
 *   1. Split the input array in half
 *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2
 *
 *   2. Both sides are sorted recursively:
 *   [4, 7, 4] -> [4, 4, 7]
 *   [3, 9, 1, 2] -> [1, 2, 3, 9]
 *
 *   3. Both halves are merged:
 *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
 *
 *   Step 2 might seem a bit mystical - how do we sort both sides? The
 *   simple answer is that we use mergesort! After all, mergesort sorts
 *   arrays, right? We can test this on [4, 7, 4] by just following the
 *   steps above but imagining that [4, 7, 4] is the whole array, which
 *   is what happens when you call mergesort on it.
 *
 *   1. Split the input array in half
 *   [4, 7, 4] -> [4], [7, 4]
 *
 *   2. Both sides are sorted recursively:
 *   [4] -> [4]
 *   [7, 4] -> [4, 7]
 *
 *   3. Both halves are merged:
 *   [4], [4, 7] -> [4, 4, 7]
 *
 *   I cheated again by going directly from [7, 4] to [4, 7], but that's
 *   really just:
 *
 *   1. Split the input array in half
 *   [7, 4] -> [7], [4]
 *
 *   2. Both sides are sorted recursively:
 *   [7] -> [7]
 *   [4] -> [4]
 *
 *   3. Both halves are merged:
 *   [7], [4] -> [4, 7]
 *
 *   As you can see, all the work actually gets done in step 3, the merge
 *   step. Everything else is just splitting and recursing.
 *
 *
 * Complexity:
 *   What is the complexity of your algorithm in time and space?
 *   The merge step can be implemented using what is conceptually an insertion sort, and yet its time
 *   complexity is (spoiler alert!) much lower. Why is that?
 *
 *
 * Extra credit:
 *   One of the benefits of mergesort over e.g. quicksort is that it is "stable"; assuming the merge
 *   step is properly implemented, list items with the same value will remain in the same order they were
 *   in in the input. (This is academic in the case of sorting integers, but it is an important consideration
 *   when sorting more complex objects.) Is your implementation a stable sort?
 *
 * Extra credit:
 *   The naive mergesort assumes that the input array is completely unsorted, but in practice even random
 *   data will have "runs" of sorted integers. The "natural mergesort" takes advantage of this by splitting
 *   the input not into sublists of length 1, but into whatever sublists are already sorted in the input.
 *   Implement natural splitting into your mergesort. How much does it improve your average-case runtime?
 *


 I:array of numbers
 O:array of numbers
 C:log(n)
 E:sorted array?
 */




  // Your code here.
  /*iterative approach:
 split the array into substay
 arr=[[],[],[]]
while (arr.length>1)
     loop through the arr(let i=0;i<arr.length;i=i+2),
         currArr = []
         tempArr[]
         tempArr=merge sort i, i+1
         currArr.push(tempArr)
     arr=currArr;
     Array.prototype.slice.call
  */
var mergeSort = function(arr) {
let arrP = [];
// for (let i=0; i<arr.length;i++){
//   console.log(arr[i]);
//   let arrNum=[];
//   arrNum.push(arr[i]);
//   arrP.push(arrNum);

// }
arr.forEach((num) => {
  let numArr=[];
  numArr.push(num);
  arrP.push(numArr)})
console.log(arrP);

while (arrP.length>1){
  for (let k=0;k<arrP.length-1;k=k+2){
    merge(arrP[k],arrP[k+1]);
  }
}
};

var merge = function(arr1,arr2){
  let arrTemp = [];
  let i=0;
  let j=0;
  while (i<arr1.length && j< arr2.length){
    if (arr1[i] > arr2[j]) {
      arrTemp.push(arr2[j]);
      j++;
    } else {
      arrTemp.push(arr1[i]);
      i++;
    }
  }
  return arrTemp.concat(arr1.slice(i).concat(arr2.slice(j)));
}

//recursion
// var mergeSort = function(arr) {
// let array =[];
// array=arr;
// let arrP = [];
// for (let i=0; i<array.length;i++){
//   console.log(array[i]);
//   let arrNum=[];
//   arrNum.push(array[i]);
//   arrP.push(arrNum);

// }
// console.log(arrP);

// };

// function mergeSort (arr) {
//   if (arr.length === 1) {
//     // return once we hit an array with a single item
//     return arr
//   }

//   const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
//   const left = arr.slice(0, middle) // items on the left side
//   const right = arr.slice(middle) // items on the right side

//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
// }

// // compare the arrays item by item and return the concatenated result
// function merge (left, right) {
//   let result = []
//   let indexLeft = 0
//   let indexRight = 0

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft])
//       indexLeft++
//     } else {
//       result.push(right[indexRight])
//       indexRight++
//     }
//   }

//   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
// }


let array=[4, 7, 4, 3, 9, 1, 2];
let result = mergeSort(array);
console.log(result);