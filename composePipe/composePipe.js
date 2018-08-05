/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';
/*
O: a function of the composition of all thin input functions in the args
I:functions
C:
E:"", parmameter functions doe not work? throw error?
*/
// var compose = function(args) {
//   // console.log(typeof arguments);
//   // console.log(arguments[1]);
//   //move from right from left
//   // use recursion
//   var composeF=function(args, i) {
//     if (i=0) {
//       return arguments[i](arguments[i+1]);
//     }else {
//       i--;
//       composeF(arguments[i](arguments[i+1]()));
//     }
//   }
//   composeF(args,arguments[arguments.length-1]);
// };

var compose = function() {

  var args = Array.prototype.slice.call(arguments);

  return function(val) {
    return args.reduceRight(function(memo, fn) {
      return fn(memo);
    }, val);
  };
  };

// var pipe = function() {

//   var args = Array.prototype.slice.call(arguments);

//   return function(val) {
//     return args.reduce(function(memo, fn) {
//       return fn(memo);
//     }, val);
//   };
//   };

var pipe = function() {
};

var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(greet, exclaim);
console.log(welcome);
