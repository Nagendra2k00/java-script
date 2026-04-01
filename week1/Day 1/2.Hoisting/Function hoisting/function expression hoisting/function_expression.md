Function Expression Hoisting :-
    Function Expression Hoisting is a process in which the declaration of a function is moved to the top of its scope during the creation phase.
    The value of the function is initialized to the actual function during the creation phase.
    The value of the function is updated to the actual function during the execution phase.

Step 1 :-
    Creation phase:
        Memory is allocated for the function.
        The value of the function is initialized to the actual function.

Step 2 :-
    Execution phase:
        The value of the function is updated to the actual function.
        The value of the function is logged to the console.

Types :-
    1. var function expression hoisting
    2. let function expression hoisting
    3. const function expression hoisting

var function expression hoisting :-

    Example :-
        console.log(a);
        var a = function() {
            console.log("Hello");
        }

    Output :-
        Hello


let function expression hoisting :-

    Example :-
        console.log(a);
        let a = function() {
            console.log("Hello");
        }
    
    Output :-
        ReferenceError: a is not defined
    Explanation :-
        a() exists in memory
        But it’s undefined
        You’re trying to call undefined()


const function expression hoisting :-

    Example :-
        console.log(a);
        const a = function() {
            console.log("Hello");
        }
    
    Output :-
        ReferenceError: a is not defined
    Explanation :-
        a() exists in memory
        But it’s undefined
        You’re trying to call undefined()