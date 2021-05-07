/*
    La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta 
    que la condición de comprobación se evalúa como falsa. La condición se evalúa después 
    de ejecutar la sentencia, dando como resultado que la sentencia especificada 
    se ejecute al menos una vez.
*/

let result = '';
let i = 0;

do {
    i = i + 1;
    result += i;
} while (i < 5);

console.log(result)