- //**Class Methods:**
   // - In a class method, `this` refers to the instance of the class.
   class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name); // Outputs: Alice
  }
}
const person = new Person('Alice');
person.greet();