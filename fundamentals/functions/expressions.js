/*
    Function expressions:
        After a function expression has been stored in a variable, the variable 
        can be used as a function. Functions stored in variables do not need function
        names. They are always invoked (called) using the variable name.
*/

alert(foo()); // Error. Foo wasn't loaded yet.
const x = function (a, b) {return a * b};