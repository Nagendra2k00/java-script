console.log(b);
let b = 20;

// step 1:-
//     Creation phase:
//         Memory is allocated for the variable 'b'.
//         But it is uninitialized.
//         This creates the Temporal Dead Zone(TDZ)
//              -> The time between entering the scope and the variable’s declaration.


// step 2:-
//     Execution phase:
//         The value of 'b' is updated to 20.
//         The value of 'b' is logged to the console.

// Output:-
//     ReferenceError: b is not defined

// ReferenceError is thrown when a variable is accessed before it is declared.


// why var is hoisted but let and const are not hoisted :-
//     The reason is that var is function-scoped, while let and const are block-scoped.
//     Function-scoped variables are hoisted to the top of their function, while block-scoped variables are hoisted to the top of their block.
//     This means that var variables are accessible throughout their entire function, while let and const variables are only accessible within their block.
//     Global variables declared with var become properties of the global object, let and const do not