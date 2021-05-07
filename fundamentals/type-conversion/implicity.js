/*
    In certain situations, JavaScript automatically converts 
    one data type to another (to the right type). This is known 
    as implicit conversion.
*/

let result;

// Conversion to string
result = '3' + 2;
console.log(result); // "32"
result = '3' + true; 
console.log(result); // "3true"
result = '3' + undefined; 
console.log(result); // "3undefined"
result = '3' + null; 
console.log(result); // "3null"

// Conversion to number
result = '4' - '2'; 
console.log(result); // 2
result = '4' - 2;
console.log(result); // 2
result = '4' * 2;
console.log(result); // 8
result = '4' / 2;
console.log(result); // 2

// Conversion from number to Boolean
result = '4' - true;
console.log(result); // 3
result = 4 + true;
console.log(result); // 5
result = 4 + false;
console.log(result); // 4

// Other
result = 4 + null;
console.log(result);  // 4
result = 4 - null;
console.log(result);  // 4
result = 4 + undefined;
console.log(result);  // NaN
result = 4 - undefined;
console.log(result);  // NaN
result = true + undefined;
console.log(result);  // NaN
result = null + undefined;
console.log(result);  // NaN