// Object Method:
//Inside a method of an object, this refers to the object that owns the method.

//Normal function

function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3);//[1,2,3]

//Arrow Function
const showArgs = () => {
  console.log(arguments);
};

showArgs(1, 2, 3); //Reference Error
//Arrow functions do not have their own arguments.