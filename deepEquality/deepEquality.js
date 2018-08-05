/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  /*
  O: boolean
  I: object (nest obj)
  C: no
  E: the keys of the two objs are dame, but the order is differendt.

compare the length of obj1, obj2
if not equal return false;
loop through key k of obj1, check obj2 contain k or not
    if obj2[k]===null, return false'
    else (
       if (obj1[k].isObject && obj2[k].isObject)
          if (deepEquals(obj1[k],obj2[k])) go to next key
              else return false;

        else obj1[k] ?== obj2[k] return false ; go to next k;
return true;


  */
var deepEquals = function(apple, orange) {
  if (apple === orange) { return true;}
  if (!orange || !apple){ return false;}
  if (!orange  instanceof Object  || !apple instanceof Object ){ return false;}
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) {return false}
  if (appleKeys.length === 0) {return true;}
  for(var key in apple){
    if (!deepEquals(apple[key],orange[key])) {return false;}
  }
  return true;
};

//let result = deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}});
let result = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}});
console.log(result);