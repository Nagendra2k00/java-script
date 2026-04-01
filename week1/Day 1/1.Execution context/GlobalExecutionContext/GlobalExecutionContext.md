Global Execution Context (GEC) :-
    GEC is a default environment where javascript code is executed, when program starts.
    created before any function is called and exists for the life time.

when js starts, it creates GEC and performs 2 phases
    1. creation phase
    2. execution phase


creation phase :-
    1. create global object
         - Browser -> window
         - Node.js -> global
    
    2. creates "this"
         - in global scope
            this === window  //true (Browser)
    
    3. Allocates the memory for variables
         var           -> undefined
         let / const   -> unintialized (TDZ)

    4. stores function declaration


execution phase :-
    1. Assigns values to variables
    2. executes statements
    3. creates function excution context when functions are called



