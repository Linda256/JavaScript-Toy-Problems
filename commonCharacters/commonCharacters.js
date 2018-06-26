/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
/*

O: string (no duplication, no space, in order in a)
I: 2 strings
C:
E:


//loop through a, put the unique char into arr1
  loop through b, if char is in arr1, add the char to string common
  return common

*/


// var commonCharacters = function(a, b) {

//   // TODO: Your code here!
//   let arrCommon =[];
//   let arrUniq = [];
//   for (let i=0;i<a.length;i++){
//     if (a[i]!==' ' && arrUniq.indexOf(a[i]) === -1){
//       arrUniq.push(a[i]);
//     }
//   }

//   for (let j=0;j<b.length;j++){
//     if (arrUniq.indexOf(b[j]) !== -1 && arrCommon.indexOf(b[j]) === -1){
//       arrCommon.push(b[j]);
//     }
//   }
//   return arrCommon.join('');
// };

var commonCharacters = function(b, a) {

  // TODO: Your code here!
  let strCommon ='';
  let strUniq = '';
  for (let i=0;i<a.length;i++){
    if (a[i]!==' ' && strUniq.includes(a[i]) !== true){
      strUniq=strUniq+a[i];
    }
  }

  for (let j=0;j<b.length;j++){
    if (strUniq.includes(b[j]) === true && strCommon.includes(b[j])!== true){
      strCommon= strCommon + b[j];
    }
  }
  return strCommon
};

//let result = commonCharacters('acexi voua', 'aegihobua');
// let result = commonCharacters('bxyz', 'bbzxy');
// console.log(result);


