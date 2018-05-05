/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || typeof n === 'NaN' || n <= 1 || n % 1 !== 0 ) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  if (( n>2 && n%2===0) || (n>3 && n%3 ===0) || (n>5 && n%5 ===0) || (n>7 && n%7 ===0) ||(n>11 && n%11===0) || (n>13 && n%13 === 0)){
    return false;
  }
  for (var i=2; i< Math.sqrt(n); i++){
    if (n%i===0){
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  var result = [];
  if (typeof start !== 'number' || start > end ||typeof end !== 'number' || end<0) {
    return result;
  }
  if (start <0 ){
    start = 2;
  }
  for (var n=start;n<=end;n++){
    if (primeTester(n)){
      result.push(n);
    }
  }
  return result;
};


//var result = primeTester(5);
var n=15485867 * 15485867;
console.log(n);
var result = primeTester(n);
 //var result = primeTester(15485867 * 15485867);

console.log(result);
// var result = primeSieve(1,6);
// console.log(result);
// var result = primeSieve(-8,-1);
// console.log(result);
// var result = primeSieve(1,1000);
// console.log(result);
// var result = primeSieve('a',1000);
// console.log(result);
//var result = primeSieve(-200000,1000);
var result = primeSieve(1,2);
console.log(result);