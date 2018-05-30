// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y

  let result = 0;
  let val = Math.abs(x);
  for (let i=0;i<Math.abs(y);i++){
    result =result + val;
  }
  if ((x<0 && y>0) || (x>0 && y<0)){
    result = - result;
  }
  return result;
};

var divide = function(x, y) {
  // TODO: should return the quotient of x / y
  if (y===0) return undefined;
  let result = 0;
  let a = Math.abs(x);
  let b = Math.abs(y);
  while (a>=b){
    a=a-b;
    result++;
  }
  if ((x<0 && y>0) || (x>0 && y<0)){
    result = - result;
  }
  return result;
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
};

let m = multiply(-5,2);
console.log(m);

let d = divide(-15,0);
console.log(d);
