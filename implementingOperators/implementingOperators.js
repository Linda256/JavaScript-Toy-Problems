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
  if (a>0){
    // calculate 3 digit
    let digit=0;
    a = a*1000
    while (a>=b){
    a=a-b;
    digit++;
    }
    result = result + digit/1000;
  }
  if ((x<0 && y>0) || (x>0 && y<0)){
    result = - result;
  }
  return result;
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
  if (y===0) return undefined;
  let a = Math.abs(x);
  let b = Math.abs(y);
  while (a>=b){
    a=a-b;
  }
  return a;
};

let m = multiply(-5,2);
console.log(m);

let d = divide(14,3);
console.log(d);

let r = modulo(14,2);
console.log(r);
