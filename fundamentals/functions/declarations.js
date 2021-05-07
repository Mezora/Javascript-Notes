/*  
    Function declarations load before any code is executed while Function 
    expressions load only when the interpreter reaches that line of code.
*/

alert(foo()); // Alert Declaration. Declaration Function are loaded before any code can run. 
function foo() {console.log('Declaration')}