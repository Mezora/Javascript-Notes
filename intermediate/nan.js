/*
    La propiedad NaN es un valor que representa Not a Number.
    Es equivalente a Number.Nan
*/

function clean(x) {
    if (x === Number.NaN) {
        // Can never be true
        return null;
    }
    if (isNaN(x)) {
        return 0;
      }
}

console.log(clean(Number.NaN)); // 0
console.log(clean(NaN)) // 0
console.log(clean('Hola')) // 0
console.log(isNaN(10)) //false
console.log(isNaN('xd')) // true 

// Check if the value it's a number 
function sanitise(x) {
    if (isNaN(x)) {
      return Number.NaN;
    }
    return x;
}

console.log(sanitise(10)); // 10


