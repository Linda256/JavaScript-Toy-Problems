/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
var input = ["paper", "rock", "scissors"];

// var rockPaperScissors = function(){
//   // start loop from input[1]
//     // loop from input
//         // loop through input
//   var result = [];
//   for(var i= 0; i<input.length; i++){
//     var output = [];
//     var first = input[i];
//     output[0]= first;
//       for (var j= 0; j<input.length; j++){
//         var second = input[j];
//         output[1]=second;
//       }
//        for (var k= 0; k<input.length; k++){
//             var third = input[k];
//             output[2]=third;
//           }
//           result.push(output);
//     }

//   }
//   return result;
// };

var rockPaperScissors = function(){
  var output = [];
  for (var i=0;i<input.length;i++){
    for (var j=0;j<input.length;j++){
      for (var k=0;k<input.length;k++){
        var result=[];
        result[0] = input[i];
        result[1] = input[j];
        result[2]=input[k];
        output.push(result);
      }
    }
  }
  return output;
}

var rockPaperScissors = function(n){
  var output = [];
  for (var i=0;i<input.length;i++){
    for (var j=0;j<input.length;j++){
      for (var k=0;k<input.length;k++){
        var result=[];
        result[0] = input[i];
        result[1] = input[j];
        result[2]=input[k];
        output.push(result);
      }
    }
  }
  return output;
}

console.log(rockPaperScissors());
