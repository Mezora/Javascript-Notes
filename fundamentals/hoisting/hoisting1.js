/*
    In Javascript, declarations (variables, functions, etc) will be at the top of
    the process, this behavior it's called Hoisting.
*/


/*
    Hoisting gives us the possibility to call a function before initialization, cause
    this will move to the top of the process. 
*/
add();
function add() {
    var myNumber = 4;
    console.log(myNumber + myNumber);
}


/*
    We need take care of variables, cause variables delcarations will get at the 
    top of the process. But not the assign. Like this example, we get an error.

        add2();
        function add2() {
            console.log(myNumber + myNumber);
        }
        var myNumber = 11;
*/


/*
    Here we have another example, if we do this, we will get an undefined.

    var x = 5;
    (function () {
        console.log("x:", x); // Error: x undefined
        var x = 10;
        console.log("x:", x); // 10
    }());

    ----- The code above it's same like write this: -----

    var x = 5;
    (function () {
        var x; // We get at the top the declaration
        console.log("x:", x); // undefined
        x = 10;
        console.log("x:", x); // 10
    }());
*/