//Function declarations are fully hoisted,
//  meaning both the function’s declaration and 
// definition are moved to the top.
//The function gesture can be called before its definition due to hoisting.

gesture(); // Output: Hello!

function gesture() {
  console.log('Hello!');
}