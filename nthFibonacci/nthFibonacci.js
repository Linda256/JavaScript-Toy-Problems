/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */
 /*
 O:Number
 I:Number
 C:No
 E:0 return? 1 return 1
 n=5
 0 1 1 2 3 5 return 5
 n=6
  0 1 1 2 3 5 8 return 8


 if n===0 return 0
 arr = [0,1]
 pre = arr[0];
 curr = arr[1];
 i = 1
 while (i<n) n=3

     curr=curr+pre curr =0+1 =1 curr=
     push curr into arr  [0,1,1]
     i++    2
     pre = arr[i-1]
     curr = arr[i]
return curr




 */


var nthFibonacci = function (n) {
  // TODO: implement me!
  if (n===0) return 0;
  let arr = [0,1]
  let pre = arr[0];
  let curr = arr[1];
  let i = 1;
  while (i<n-1) {
    curr=curr+pre;
    arr.push(curr);
    i++;
    pre = arr[i-1];
    curr = arr[i];
  }
  return curr+pre;
};

var nFib = function(n){
  var mem = [];
  for (var i=0; i<=n; i++){
     mem[i]< 2 ? i: mem(n-1) + nFib(n-2);
  }
   return mem[n];

}

var nFib = function(n){
  return n < 2 ? n: nFib(n-1) + nFib(n-2);
}

let result = nthFibonacci(6);
console.log(result);



