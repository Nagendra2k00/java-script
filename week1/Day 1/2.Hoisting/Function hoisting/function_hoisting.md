Function Hoisting :-
    Function Hoisting is a process in which the declaration of a function is moved to the top of its scope during the creation phase.
    The value of the function is initialized to the actual function during the creation phase.
    The value of the function is updated to the actual function during the execution phase.

Types :-
    1. Function Declaration Hoisting
    2. Function Expression Hoisting


Important Points :-
    During creation phase:
        1. var → initialized as undefined
        2. let / const → uninitialized (TDZ)
        3. function declarations → fully available
        4. function expressions → behave like variables

Example :-
    console.log(a);
    function a() {
        console.log("Hello");
    }

Output :-
    Hello


