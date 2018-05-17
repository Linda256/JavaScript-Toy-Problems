/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// var makeChange = function(total) {
//   var ways = 0;
//   if (total <= 0) return ways;
//   //var pound = [1,2,5,10,20,50,100,200].sort((a-b) => a<b);
//   var pounds = [200,100,50,20,10,5,2,1];
//   // use recursion function calWays(ways,pounds,currTotal)to calculate ways
//   function calWays(ways,pounds,currTotal){
//     var sum = 0;
//     // base case
//     if (sum === currTotal){
//          return ways++;
//        }
//     //loop through pounds
//     for (var i=0;i<pounds.length;i++){
//       var k = currTotal/pounds[i];
//       if (k===0){
//          ways ++;
//          calWays(ways,pounds.slice(1),currTotal);
//       } else {
//         for (j=1;j<=k;j++ ){
//               currTotal= currTotal - pounds[i]*j;
//               calWays(ways,pounds.slice(1),currTotal);
//         }
//       }
//     }
//   }
//   calWays(ways,pounds,total);
//   return ways;
// };

var makeChange = function(total) {
  var ways = 0;
  if (total <= 0) return ways;
  var pounds = [1,2,5,10,20,50,100,200]
  // use recursion function calWays(ways,pounds,currTotal)to calculate ways
  function calWays(index,currTotal){
    var currPound =  pounds[index];
    // base case
    if (index === 0 && currTotal % currPound === 0){
         return ways++;
       }
    while (currTotal >= 0){
      calWays(index-1,currTotal);
      currTotal -= currPound;
    }
  }
  calWays(pounds.length-1,total);
  return ways;
};

var result =makeChange(200);
console.log(result);
