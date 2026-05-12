- **Variable Hoisting:** `var` declarations are hoisted, but initializations are not.
- **Function Hoisting:** Function declarations are fully hoisted.
- **`let` and `const` Hoisting:** Hoisted but not initialized; accessing before declaration results in an error.
- **Function Expressions:** Only variable declaration is hoisted, not the function assignment.

- **Scope:**
    - **`var`:** Function-scoped or globally scoped.
    - **`let`:** Block-scoped (limited to the block, statement, or expression where it is defined).
    - **`const`:** Block-scoped (similar to `let`).

    - **Reassignment:**
    - **`var`:** Allows reassignment of variables.
    - **`let`:** Allows reassignment of variables.
    - **`const`:** Does not allow reassignment once a value is assigned.

    - **Hoisting:**
    - **`var`:** Variables are hoisted and initialized with `undefined`.
    - **`let`:** Variables are hoisted but remain uninitialized, leading to a `ReferenceError` if accessed before declaration.
    - **`const`:** Variables are hoisted but remain uninitialized, leading to a `ReferenceError` if accessed before declaration.

    - **Variable Initialization:**
    - **`var`:** Can be declared and initialized later; initialized with `undefined` if accessed before assignment.
    - **`let`:** Must be initialized before use.
    - **`const`:** Must be initialized at the time of declaration.
    
- **Redeclaration:**
    - **`var`:** Allows redeclaration within the same scope.
    - **`let`:** Does not allow redeclaration within the same block scope.
    - **`const`:** Does not allow redeclaration within the same block scope.