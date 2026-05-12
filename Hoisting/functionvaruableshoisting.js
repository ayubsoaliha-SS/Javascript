//Function expressions are not hoisted. 
// Only the variable declaration is hoisted, not the function assignment.
//  sayHi is hoisted as var sayHi;, but its assignment to a function is not, 
// resulting in an error if called before the assignment.

sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
  console.log('Hi!');
};