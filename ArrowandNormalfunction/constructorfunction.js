//Can Be Used as Constructors?

//Normal Function
function Person(name) {
  this.name = name;
}
const user = new Person("John");
console.log(user.name); //John


//Arrow Function
const Person = (name) => {
  this.name = name;
};
const user = new Person("John"); // TypeError: Person is not a constructor