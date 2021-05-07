/*
    Const:
        Variables declared with const maintain constant values.
        Const declarations share some similarities with let declarations.
        Const declarations can only be accessed within block they were declared.
        Const variables can't be re-declared in the same scope. 
*/


const userName = "Kalos";
userName = "Mezora"; // Error: Assignment to constant variable

const userName2 = "Kalos";
const userName2 = "Mezora"; // Error: Identifier 'userName2' has already been declared