Function Execution Context (FEC) :-
    FEC is an environment created by js when a function is invoked.
    it contains function local variables, parameters, function declarations and its own "this" value.


When a function is called, js creates a FEC with:
    - Arguments object    
    - Local variables 
    - Function declarations    
    - Lexical environment (scope info)    
    - this value


there are two phases 
    Creation Phase (before any line runs) :-
        - Creates the arguments object
        - Hoists variables (var → undefined)
        - Registers inner function declarations
        - Sets up scope chain
        - Assigns this
    
    Execution Phase :-
        - Assigns values
        - Executes statements line by line
        - Calls other functions (creating more FECs)