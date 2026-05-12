//Variables in a closure persist across
//  multiple function calls.

function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(5)); // Output: 10
console.log(double(7)); // Output: 14