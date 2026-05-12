// this Keyword Behavior
//- ** Normal Function Context:**
    // - In a regular function, `this` refers to the object that is
    //  executing the function.
    // - If not called as a method of an object,
    //  `this` will be `undefined` in strict mode.
 const person = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};
person.greet();  // John

//- **Arrow Function Context:**
    // - Arrow functions do not have their own `this` 
    // and inherit `this` from their enclosing lexical scope.

    const person = {
  name: "John",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined