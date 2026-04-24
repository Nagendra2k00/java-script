# Scope

Scope is the area where a variable can be accessed.

## Example

```js
let a = 10;

function test() {
  let b = 20;
  console.log(a); // accessible
}

test();
console.log(b); // ReferenceError
```

## Explanation

- `a` belongs to global scope, so it is accessible inside `test()`.
- `b` belongs to function scope, so it is not accessible outside `test()`.