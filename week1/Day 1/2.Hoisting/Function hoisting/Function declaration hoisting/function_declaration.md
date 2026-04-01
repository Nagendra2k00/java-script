Function Declaration Hoisting :-
    Function Declaration Hoisting is a process in which the declaration of a function is moved to the top of its scope during the creation phase.
    The value of the function is initialized to the actual function during the creation phase.
    The value of the function is updated to the actual function during the execution phase.

Step 1 :-
    Creation phase:
        Memory is allocated for the function.
        The value of the function is initialized to the actual function.
        Entire function stored in memory

Step 2 :-
    Execution phase:
        The value of the function is updated to the actual function.
        The value of the function is logged to the console.

Example :-
    console.log(a);
    function a() {
        console.log("Hello");
    }

Output :-
    Hello
