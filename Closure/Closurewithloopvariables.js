//var is function-scoped, so all functions share the same i variable.
//The stored functions do not capture the value at each iteration.
//They capture the variable itself.

function makeFunctions() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs[i] = function() {
      return i;
    };
  }
  return funcs;
}

const funcs = makeFunctions();
console.log(funcs[0]()); // What is the output? 3
console.log(funcs[1]()); // What is the output? 3
console.log(funcs[2]()); // What is the output? 3
 // Using let creates a new variable for each iteration
 //Because each closure gets its own block-scoped i.