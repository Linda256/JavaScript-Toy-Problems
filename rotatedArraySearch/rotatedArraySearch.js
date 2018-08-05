/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:                      5  11
 * rotatedArraySearch([4, 5, 6, 7,8, 10, 11, 0, 1, 2, 3,], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:

  /*
  if the left value is <= middle, the left is sorted
  use binary search consider which part has rotate point. if mid > hi, rotate point mid is the rotate point or is in right part. if lo > mid, rotate point is in the left part(include mid)
  lo=0
  hi=rotated.length-1
  while (lo<=hi)
    mid = lo/2+hi/2
    compare  target with rotated[mid],
       if target === rotated[mid] return mid
       else if target > rotated[mid]
          if rotated(lo)>rotated(mid) left part (hi=mid)
          else right part (lo=mid)
       else
          if rotated(hi)>rotated(mid) right part (lo=mid)
          else left part (hi=mid)
return false
  */


  let lo=0
  let hi=rotated.length-1
  while (lo<=hi){
    let mid = lo/2+hi/2;
    if (target === rotated[mid]) return mid
    else if(target > rotated[mid]) {
      rotated(lo)>rotated(mid) ? hi=mid : lo=mid;
    }else {
      rotated(hi)>rotated(mid) ? lo=mid : hi=mid;
    }
  }
return false
};

