/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(arr) {
  // TODO: everything
  let arr1 = arr;
  let len = arr1.length;
  arr1.sort((a,b) => (b-a));
  let result =1 ;
  if (arr1[0]>0&&arr1[len-1] < 0 && arr1[len-1]*arr1[len-2] > 0 && arr1[len-1]*arr1[len-2] > arr1[1]*arr1[2]){
    result = arr1[len-1]*arr1[len-2]*arr1[0];
  } else {
   result= arr1[0]*arr1[1]*arr1[2];
  }
  return result;
};

let arr = [-1, -2, -3, -4, -5, -6];
//let arr =[2, -1, 3, -7];
let result = largestProductOfThree(arr);
console.log(result);

