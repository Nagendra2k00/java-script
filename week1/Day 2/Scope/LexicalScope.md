# Lexical Environment

A lexical environment is a structure that stores variables and keeps a reference to its parent environment.  
Every execution context has one.

## Example

```js
function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();
fn();
```

## Steps

When `outer()` runs:
- `x` is created with value `10`
- `inner` is created
- `inner` keeps a reference to `outer`'s lexical environment

When `fn()` runs:
- Even though `outer()` has finished, `inner` still accesses `x`
- Output is `10`