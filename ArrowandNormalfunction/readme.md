- **`this` Binding:**
    - **Normal Function:** Has its own `this` context, determined by how the function is called.
    - **Arrow Function:** Inherits `this` from the surrounding lexical scope; does not have its own `this`.
- **Arguments Object:**
    - **Normal Function:** Has access to the `arguments` object, which contains all arguments passed to the function.
    - **Arrow Function:** Does not have its own `arguments` object; it can access `arguments` from the surrounding scope.
- **Constructor Behavior:**
    - **Normal Function:** Can be used as a constructor with the `new` keyword to create instances.
    - **Arrow Function:** Cannot be used as a constructor; using `new` with an arrow function will throw an error.
- **`return` Statement:**
    - **Normal Function:** Requires an explicit `return` statement to return a value.
    - **Arrow Function:** For single expressions, the `return` statement is implicit; the result of the expression is returned automatically.


    | Feature             | Normal Function       | Arrow Function  |
| ------------------- | --------------------- | --------------- |
| Syntax              | Longer                | Shorter         |
| Own `this`          | ✅ Yes                 | ❌ No            |
| Own `arguments`     | ✅ Yes                 | ❌ No            |
| Constructor (`new`) | ✅ Yes                 | ❌ No            |
| Hoisted             | ✅ Yes                 | ❌ No            |
| Best Use            | Methods, constructors | Short callbacks |
