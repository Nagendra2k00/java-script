# Function Hoisting

Function hoisting means JavaScript processes function-related declarations during the creation phase before code executes line by line.

## Types

1. Function declaration hoisting
2. Function expression hoisting

## Important Points

During the creation phase:

- `var` is initialized as `undefined`.
- `let` and `const` stay uninitialized (Temporal Dead Zone).
- Function declarations are fully available.
- Function expressions behave like normal variable assignments.

## Example

```js
console.log(a);

function a() {
  console.log("Hello");
}
```

## Output

```txt
[Function: a]
```

If `a();` is called, output is:

```txt
Hello
```
