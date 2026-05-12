//Data Encapsulation with Closures
//name and age are private variables.They cannot be accessed directly:
//They can only be accessed or modified through the returned methods.
function createPerson(name) {
  let age = 30;
  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    setAge: function(newAge) {
      age = newAge;
    }
  };
}

const person = createPerson('John');
console.log(person.getName()); // What is the output?
console.log(person.getAge()); // What is the output?
person.setAge(35);
console.log(person.getAge()); // What is the output?
