function outer() {
  let value = 'outer';
  function inner() {
    let value = 'inner';
    return function() {
      return value;
    };
  }
  return inner();
}

const getValue = outer();
console.log(getValue()); // What is the output?  inner
//The inner value hides (shadows) the outer value inside that scope.
