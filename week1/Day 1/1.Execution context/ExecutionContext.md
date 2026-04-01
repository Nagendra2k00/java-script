An Execution context is the environment where javascript evaluates and executes code.

there are 3 types :-
    1. Global Execution context (GEC)
    2. Function execution context (FEC)


only one context run at a time while other wait in stack.  



Every execution context is created in two phases:
    1. Creation Phase
    2. Execution phase



creation phase :-
    this is also called as setup phase.
    js scans the code and prepares memory.

    here it 
        1. allocates memory for variables.
        2. register the function declarations.
        3. set up scope info.
        4. Determines "this".


Execution phase :-
    here js runs the code line by line, using what it prepared earlier



