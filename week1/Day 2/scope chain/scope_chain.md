# Scope Chain

When JavaScript looks for a variable, it searches in this order:

1. Current scope
2. Parent scope
3. Parent's parent scope
4. ...continues until global scope

If the variable is not found anywhere in this chain, JavaScript throws a `ReferenceError`.

This variable lookup path is called the **scope chain**.

JavaScript uses **lexical scoping**, which means scope depends on where functions are written, not where they are called.

## Example

```js
let x = 100;

function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();

function another() {
  let x = 50;
  fn();
}

another();
```

## Output

`10`