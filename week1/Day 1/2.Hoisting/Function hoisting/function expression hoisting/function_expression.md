# Function Expression Hoisting

Function expressions are treated like variable assignments, so their behavior depends on whether they use `var`, `let`, or `const`.

## Types

1. `var` function expression
2. `let` function expression
3. `const` function expression

## 1) `var` Function Expression

```js
console.log(a);
var a = function () {
  console.log("Hello");
};
```

### Output

```txt
undefined
```

Explanation:
- `a` is hoisted and initialized with `undefined`.
- The function value is assigned only when execution reaches `var a = ...`.

## 2) `let` Function Expression

```js
console.log(a);
let a = function () {
  console.log("Hello");
};
```

### Output

```txt
ReferenceError: Cannot access 'a' before initialization
```

Explanation:
- `a` is hoisted but uninitialized (TDZ).
- Accessing it before declaration throws a `ReferenceError`.

## 3) `const` Function Expression

```js
console.log(a);
const a = function () {
  console.log("Hello");
};
```

### Output

```txt
ReferenceError: Cannot access 'a' before initialization
```

Explanation:
- `const` behaves like `let` with TDZ before initialization.