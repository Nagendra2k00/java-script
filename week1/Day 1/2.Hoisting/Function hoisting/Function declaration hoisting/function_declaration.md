# Function Declaration Hoisting

Function declaration hoisting means JavaScript makes function declarations available during the creation phase of the execution context.

## Phases

### 1) Creation phase

- Memory is allocated for the function.
- The full function declaration is stored in memory.
- The function can be called even before its line appears in code.

### 2) Execution phase

- JavaScript executes statements line by line.
- Calling the function works because it was already available from the creation phase.

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

If you call `a();`, then the output is:

```txt
Hello
```
