//The returned function has access to variables from both:
//its immediate outer function (inner)
//and the parent function (outer)

function outer() {
  let outerVar = 'Outer';
  function inner() {
    let innerVar = 'Inner';
    return function() {
      return `${outerVar} - ${innerVar}`;
    };
  }
  return inner();
}

const result = outer();
console.log(result()); // What is the output?   outer - inner

//second problem
function outer(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

const add5 = outer(5);
const add10 = add5(10);
console.log(add10(15)); // What is the output? // 30

//Each returned function remembers variables from the outer functions:
//inner function remembers y
//innermost function remembers both x and y
