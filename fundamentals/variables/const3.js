/*
    Hoisting of const:
        Similar with var and let, const get at the top but can´t be called
        if it is not declared before.
*/

console.log(userName); // Error: Cannot access 'userName' before initialization 
const userName = "Kalos";