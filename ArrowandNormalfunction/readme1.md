### use strict

- **Purpose:**
    - Enforces stricter parsing and error handling in JavaScript to catch common errors and improve performance.
- **Scope:**
    - **Global Strict Mode:** Applied by placing `"use strict";` at the top of the script.
    - **Function Strict Mode:** Applied by placing `"use strict";` at the beginning of a function body.
- **Key Differences from Non-Strict Mode:**
    - **Implicit Globals:** Disallows the use of undeclared variables, preventing the creation of global variables unintentionally.
    - **`this` Keyword:** In a function, `this` is `undefined` if not explicitly bound to an object.
    - **Function Declarations:** Function declarations inside blocks are not allowed.
    - **Deleting Variables and Objects:** Disallows the deletion of variables, functions, and function arguments.
    - **Duplicate Parameter Names:** Disallows duplicate parameter names in function definitions.
    - **Octal Literals:** Disallows the use of octal literals (e.g., `010`).
    - **`with` Statement:** Disallows the use of the `with` statement due to ambiguity in variable scope.
- **Usage:**
    - **Global Strict Mode:** `"use strict";` at the top of the script.
    - **Function Strict Mode:** `"use strict";` at the beginning of a function.