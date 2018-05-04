/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  for (var i=2; i<n; i++){
    if (n%i===0){
      return true;
    }
  }
  return false;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  var result = [];
  if (typeof start !== 'number' || start > end ||typeof end !== 'number' ) {
    // n isn't a number or n is less than 1 or n is not an integer
    return result;
  }
  for (var n=start;n<=end;n++){
    if (primeTester(n)){
      result.push(n);
    }
  }
  return result;
};


//var result = primeTester(5);
var result = primeTester(0);
console.log(result);
var result = primeSieve(1,6);
console.log(result);
var result = primeSieve(-8,-1);
console.log(result);