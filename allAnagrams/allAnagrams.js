/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {

  function findAnagrams(start, strRemainder) {
    if (strRemainder.length === 1) {
      return [start + strRemainder];
    } else {
      let results = [];
      for (let i = 0; i < strRemainder.length; i++) {
        console.log(strRemainder[i]);
        let anagram = findAnagrams(strRemainder[i], strRemainder.substr(0, i) + strRemainder.substr(i + 1));
        console.log(strRemainder[i] +' ' + 'anagram: ' +  anagram);
        for (let j = 0; j < anagram.length; j++) {
          results.push(start + anagram[j]);
        }
      }

      return results;
    }
  }

  return findAnagrams('', string);


};

// var anagrams = allAnagrams('abc');
// console.log(anagrams);
