//Shallow copy
// Copies the top-level properties of an object.
//  Nested objects are still referenced, not cloned.
// Method: Object.assign() or the spread operator { ...original }
let original = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original);
shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3 (nested object is shared)

//Deep Copy
//Creates a complete copy of an object, including all nested objects.
//Method: JSON.parse(JSON.stringify(object))

let original1 = { d: 1, e: { f: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original1));
deepCopy.e.f = 3;
console.log(original1.e.f); // Output: 2 (nested object is cloned)
