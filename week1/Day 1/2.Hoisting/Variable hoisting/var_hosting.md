# Variable Hoisting

Variable hoisting means JavaScript registers variable declarations during the creation phase.

## `var` Hoisting

- The declaration is hoisted.
- It is initialized with `undefined` during creation.
- Value assignment happens later during execution.

## `let` and `const` Hoisting

- Their declarations are also hoisted.
- They are **not** initialized during creation.
- They stay in the Temporal Dead Zone (TDZ) until declaration line is reached.
