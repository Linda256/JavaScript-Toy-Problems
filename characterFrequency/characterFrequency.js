/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var charFreq={};
  var result =[];

  // loop through the string.
    //for each char (loop through the result)
      //if it is not found in result array, is not found in the result[i]
        //create var charFreq = [char, 1]; push charFreq into result
      // else, increase 1 in that match charFreq[]
  for (var i =0 ; i<string.length; i++){
    var char = string[i];
    if (charFreq[char]=== undefined) {
      charFreq[char]=1
    } else {
      charFreq[char] +=1;
    }
  }

  for (var char in charFreq){
    result.push([char,charFreq[char]]);
  }

  result.sort(function(a, b) {
    if (a[1] > b[1]) { return -1; }
    else if (a[1] < b[1]) { return 1; }
    else if (a[0] < b[0]) { return -1; }
    else if (a[0] > b[0]) { return 1; }
  });

  return result;
};

// var string = 'mmmaaaiiibbb'
// var string = 'miaaiaaippi'
// var arr = ['w',5]
// var arr2=[];
// arr2.push(arr);
// console.log('arr2: '+arr2);
// console.log(string[1]);
// var result = characterFrequency(string);
// console.log(result);