/*
    Hoisting of let:
        A difference with var, with let if you call variable before
        inicialization you will get an error.
*/

console.log(userName); // Cannot acces 'userName' before initialization
let userName = "Kalos";