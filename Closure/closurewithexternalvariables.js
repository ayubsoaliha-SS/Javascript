//Closures capture variables by reference, not by value.
let globalVar = 'Global';
function makeClosure() {
  return function() {
    return globalVar;
  };
}

const closure = makeClosure();
globalVar = 'Changed';
console.log(closure()); // What is the output?
