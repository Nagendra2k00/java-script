var a = 10;

function greet(){
    var b = 20;
    console.log(a + " " + b);
}

greet();

/*
Step 1: Global Creation Phase
    Memory looks like this:
    a = undefined
    greet = function greet() { ... }
    this = window object (browser) / global object (node.js)

Step 2: Global Execution Phase
    a = 10;
    greet(); // function call
        - Creates new FEC for greet()

Step 3: Inside greet()
    creation phase :-
        b = undefined
    execution phase :-
        b = 20;
        console.log(a + " " + b); 

*/