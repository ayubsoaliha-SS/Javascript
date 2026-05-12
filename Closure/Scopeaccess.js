//Closures provide access to variables from 
// the outer function’s scope. 

function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}
const greetHello = createGreeting('Hello');
console.log(greetHello('Alice')); // What is the output?  Hello Alice!

function outer() {
  let outerVar = 'I am outside!';
  function inner() {
    console.log(outerVar);
  }
  return inner;
}

const innerFunc = outer();
innerFunc(); // Output: I am outside!