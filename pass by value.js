// Pass-by-Value: 
// JavaScript passes primitive types (e.g., number, string, boolean) by value. 
// A copy of the value is created, so changes to the copy do not affect 
// the original value.

let a = 5;
let b = a; // b is a copy of a
b = 10;
console.log(a); // Output: 5 (a remains unchanged)
console.log(b); // Output: 10

//Impact on Function Behavior:
// Pass-by-Value: Changes to the copied value inside a function
//  do not affect the original value.
function modifyValue(x) {
  x = 10;
}
let c = 5;
modifyValue(c);
console.log(c); // Output: 5

//Examples on primitive types:
let x = 7;
let y = x;
y += 3;
console.log(x); // Output: 7 (x is not affected)
console.log(y); // Output: 10