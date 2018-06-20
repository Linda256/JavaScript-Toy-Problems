/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
/*
O: Char
I:String
C: No
E: lowercase vs. upcase
*/
var firstNonRepeatedCharacter = function(str) {
  // TODO: your solution here

  //create an object (visited) to store the char visited
  // loop through the string,
  //  check the char(convert to lower case) is in visited or not
        // if yes, value++
        // if no, put str[i] into visisted, set the value =1 ;
  // loop through visited. return the first key with value 1. ;
  let visited ={};
  for (let i=0;i<str.length;i++){
    let currChar = str[i];
    visited[currChar] === undefined ? visited[currChar] = 1 : visited[currChar] = visited[currChar]+1;
    }
  for (k in visited){
    if (visited[k]===1) return k;
  }
  return null;
};

//let result=firstNonRepeatedCharacter('ABA');
//let result=firstNonRepeatedCharacter('AACBCDB');
let result=firstNonRepeatedCharacter('AAAACXC');
console.log(result);