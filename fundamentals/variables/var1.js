/*
    Scope of var:
        The scope is global when var variable is declared outside
        a function. It means that any variable declared with var
        outside a function block is available for use anywhere.
        Also var variables are hoisted to the top of their scope and
        initialized with a value of undefined..

*/


// If we do this:
console.log(greeter);
var greeter = "Hello!";
// It's interpeted as this:
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"


var name = "Kalos"; // Globally scoped
function newFunction() {
    var hello = "Hello"; // Local scoped (inside function)
}
console.log(name) // Kalos
console.log(hello) // Error: hello is not defined