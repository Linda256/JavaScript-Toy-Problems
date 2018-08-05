/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *

 I: number
 O: String (simplified fraction)
 C:
 E: 0.999999999999


 convert number to string
 find the position of  '.'
 get the digits number d from '.' to the end.
 multiply =1
 while  (d >0)
      multiply = multiply*10
      d--
denominator =num*nultiple
nominator

simplify(help function common factor)
find the greatest common factor
 */

var toFraction = function(num) {
  // Your code here

  var demon =1;
  //time the num by 10 until it is a whole number
  if (num < 0) {
    return '-' + toFraction(-num)
  }else {
      while(num%1 !==0){
        num=num*10;
        denom=denom*10;
      }
      //find the great common denominator
      var gcd =1;
      for ()
        // to do

      return num/gcd + '/' + denom/god
  }
};
