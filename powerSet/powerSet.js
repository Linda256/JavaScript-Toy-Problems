/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */
/*
O: array, include empty set subset sorted. no duplicates(combination has same char)
I:string
C:
E:empty string, length of string

split the string to arr strArr
sort the strArr
output= ['']
let i=0
subset = ''
resursion
if i===strArr.length, return output

powerSub(output)



output.push('');
loop through strArr(for loop)
   if strArr(i)===strArr(i-1) i++ //avoid duplicate char
loop th


How to do?
1. Get all unique letters
2. recuisively find subset
*/
var powerSet = function(str) {
};
