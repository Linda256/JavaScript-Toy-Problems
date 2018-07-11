/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 O: boolean
 I: char '(' '{' '['
 C: O(n)
 E: if input is not '(' '{' '['?

 left = ['(','[','{']
 right=[')',']','}']

loop through the input
if char in left i, push the right[i] into stack;
else
    if char in right i, compare right[i] with stack.pop();
        if equel, continue
        not  return false
return false;
 */
var balancedParens = function(input) {
  let left = ['(','[','{'];
  let right=[')',']','}'];
  let stack=[];
  for (let k=0; k<input.length; k++){
    if (left.indexOf(input[k]) === -1 && right.indexOf(input[k]) === -1) continue;
    if (right.indexOf(input[k]) !== -1 && stack.length===0) return false;
    if (left.indexOf(input[k]) !== -1){
      let i = left.indexOf(input[k]);
      stack.push(right[i]);
      continue;
    }
    if (right.indexOf(input[k]) !== -1){
      if (stack.pop() === input[k]){
        console.log(input[k]);
        continue;
      }else {
        return false;
      }
    }
  }
  console.log(stack.length);
 if (stack.length===0) {
  return true;
 } else {
    return false;
  }
};


//let result = balancedParens('(())[](()){}');
//let result = balancedParens(' var hubble = function() { telescopes.awesome();');
//let result=balancedParens(' var wow  = { yo: thisIsAwesome() }');
let result=balancedParens(')(')
console.log(result);



