# Global Execution Context (GEC)

Global Execution Context is the default environment where JavaScript runs when a program starts.

It is created before any function call and lives for the lifetime of the program.

When JavaScript starts, it creates GEC in two phases.

## 1) Creation phase

1. Creates the global object  
   - Browser -> `window`  
   - Node.js -> `global`
2. Sets up global `this`  
   - In browsers, `this === window` at global scope
3. Allocates memory for declarations  
   - `var` -> `undefined`  
   - `let` and `const` -> uninitialized (TDZ)
4. Stores function declarations in memory

## 2) Execution phase

1. Assigns runtime values to variables
2. Executes statements
3. Creates Function Execution Contexts when functions are called
