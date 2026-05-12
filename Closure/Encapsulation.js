//Excapsulation: Closures can encapsulate data, making variables 
// private and inaccessible from the outside.
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2