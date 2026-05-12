//let and const are hoisted but not initialized. They are in a “temporal dead zone” 
// from the start of the block until their declaration is encountered.
//Accessing variables declared with let or const before 
// their declaration results in a ReferenceError.

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;


console.log(b); // Reference error
const b = 18;

function testLet() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // What is the output?   2
  }
  console.log(x); // What is the output?     1
}

testLet();


function testConst() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x); // What is the output?   2
  }
  console.log(x); // What is the output?     1
}

testConst();

let x = 10;
x = 20;
console.log(x); // What is the output?  20

const x = 10;
x = 20;
console.log(x); // What is the output?  // typeerror



