//  Variable declarations (using var) are hoisted to the top of their function 
//  or global scope, but initializations are not.
//Only the declaration var x; is hoisted, 
// so x is undefined until it is assigned the value 5.
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

console.log(y); 
var y =10;
console.log(y);

function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // What is the output?  2
  }
  console.log(x); // What is the output?    2
}

testVar();



var x = 10;
x = 20;
console.log(x); // What is the output?   20
