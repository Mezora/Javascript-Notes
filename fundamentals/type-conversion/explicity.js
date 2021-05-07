/*
    Explicity conversion
    Numeric string used with + gives string type
    In JavaScript, explicit type conversions are done using built-in methods.
*/

let result;

// Convert to number
result = Number('11');
console.log(result); // 11
result = Number('324e-1');
console.log(result); // 32.4
result = Number(' ')
console.log(result);  // 0
result = Number('Kalos');
console.log(result); // NaN
result = Number(true);
console.log(result); // 1
result= Number(false);
console.log(result); // 0
result = Number(null);
console.log(result);  // 0
result = Number(undefined);
console.log(result);  // NaN
result = Number(NaN);
console.log(result);  // NaN

// Convert to String
result = String(11);
console.log(result); // 11
result = String(2 + 4);
console.log(result); // "6"
result = String(null);
console.log(result); // "null"
result = String(undefined);
console.log(result); // "undefined"
result = String(NaN);
console.log(result); // "NaN"
result = String(true);
console.log(result); // "true"
result = String(false);
console.log(result); // "false"
result = (324).toString();
console.log(result); // "324"

// Convert to Boolean Explicitly
result = Boolean('');
console.log(result); // false
result = Boolean(0);
console.log(result); // false
result = Boolean(undefined);
console.log(result); // false
result = Boolean(null);
console.log(result); // false
result = Boolean(NaN);
console.log(result); // false
result = Boolean(324);
console.log(result); // true
result = Boolean('hello');
console.log(result); // true
result = Boolean(' ');
console.log(result); // true