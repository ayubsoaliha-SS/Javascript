function createCounter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }
  return { increment, decrement };
}

const counter = createCounter();
console.log(counter.increment()); // What is the output?   1
console.log(counter.decrement()); // What is the output?   0
