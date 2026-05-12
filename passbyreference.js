// Pass-by-Refernce: JavaScript passes objects and arrays by reference. 
// A reference to the original object or array is passed, 
// so changes affect the original data.

let myObj = { value: 5 };
let anotherObj = myObj; // anotherObj refers to the same object as myObj
anotherObj.value = 10;
console.log(myObj.value); // Output: 10 (myObj is affected)
console.log(anotherObj.value); // Output: 10

//Impact on Function Behavior:
// Changes to the referenced object or array inside
//  a function will affect the original object or array.

function modifyObject(obj) {
  obj.value = 10;
}
let myObj1 = { value: 5 };
modifyObject(myObj1);
console.log(myObj1.value); // Output: 10


// objects and arrays
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is affected)
console.log(arr2); // Output: [1, 2, 3, 4]