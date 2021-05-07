/*
    This behavior is somehow different when it comes to objects declared with const. 
    While a const object cannot be updated, the properties of this objects can be updated. 
    Therefore, if we declare a const object as this:
*/


// We can do this
const greeting = {
    message: 'Say Hi',
    times: 4
}
greeting.message = "Say hello instead"
console.log(greeting) // { message: 'Say hello instead', times: 4 } 

// We can't do this
greeting = {
    words: "Hello",
    number: "five"
} // Error:  Assignment to constant variable.
console.log(greeting) // { message: 'Say hello instead', times: 4 } 
