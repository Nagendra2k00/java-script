bar();

var bar = function () {
    console.log("Hi");
};

// output :-
//     TypeError: bar is not a function

// Explanation :-
//     bar() exists in memory
//     But it’s undefined
//     You’re trying to call undefined()