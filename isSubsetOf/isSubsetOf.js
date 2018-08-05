/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

/*
I:arr
O: boolean
C:
E:''output?
*/

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  // arrS= this;
  // set curr = arrSub[o]
  // loop through arr(while i< arrSub.length)
  // check curr is in  arr
  //     if yes
  //         i++
  //         curr = arrSub[i]
  //     if no reture false
  // return true
   let arrSub=this;
   console.log(arrSub);
   let curr = arrSub[0];
   let i=0;
   while (i<arrSub.length){
    if(arr.indexOf(curr)!==-1){
      i++;
      while (curr===arrSub[i]) {
        i++;
      }
      curr=arrSub[i];
    } else {
      return false;
    }
   }
   return true;
};

//help function
// function objectify(arr){
//   var obj ={}
// }

// let a = ['commit','push']
// let result = a.isSubsetOf(['commit','rebase','push','blame'])
// var b = ['merge','reset','beset']
// let result2= b.isSubsetOf(['reset','merge','add','commit'])
// console.log(result2);