/*
    Let is now preferred for variable declaration. It's no surprise
    as it comes as an improvement to var declarations. It also solves
    the problem with var that we just covered. Let's consider why this is so.

    Let is block scoped
        A block is a chunk of code bounded by {}. A block lives in curly braces. 
        Anything within curly braces is a block.
*/

let greeting  = "Hi";
let times = 4;

if (times > 3) {
    let hello = "Say hello instead lol";
    console.log(hello); // Say hello instead lol
} 

// console.log(hello); Error: hello is not defined!

/*
    Let can be updated but no re-declared
        Let can be updated within its scope. Unlike var, a let variable 
        cannot be re-declared within its scope. So while this will work:
*/


// This will work:
let userName = "Kalos";
userName = "Mezora";
// This will return an error:
let userName2 = "Kalos";
// let userName2 = "Mezora"; // Error: Identifier 'userName2' has already been declared


// If the variable is defined in different scope, there will be no error:
let hello = "Say Hi"
if (true) {
    let hello = "Say Hello instead";
    console.log(hello); // Say hello instead 
}
console.log(hello); // Say hi



