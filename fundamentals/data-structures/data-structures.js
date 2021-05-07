"use strict"
// Weak Map: Colection of pair key values where key are objects and value are arbitrary values.
//Sintaxis: new WeakMap([iterable])

// Set: Allows us save uniques values of any type.
// Sintaxis: new Set([iterable])
let bolsa = new Set(['strawnberry', 'mandarine']);
bolsa.add('apple')
        .add('lemon')
        .add('orange')
        .add('apple'); // If we add same value declared before don't be added.
console.log(bolsa); // Set { 'strawnberry', 'mandarine', 'apple', 'lemon', 'orange' } 
console.log(bolsa.has('orange')) // true
console.log(bolsa.has('watermelon')) // false
bolsa.delete('apple') // Delete apple
console.log(bolsa) // Set { 'strawnberry', 'mandarine', 'lemon', 'orange' } 
for ( let fruit of bolsa ) {
    console.log(fruit); // strawnberry, mandarine, lemon, orange
}
const arr = [...bolsa]; // Transforming bolsa to an array
console.log(arr); // [ 'strawnberry', 'mandarine', 'lemon', 'orange' ] 
const arr2 = new Set([...bolsa].map((fruit, i) => `${i} - ${fruit}`))
console.log(arr2); // Set { '0 - strawnberry', '1 - mandarine', '2 - lemon', '3 - orange' }

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mySet = new Set(myArray);
mySet.add('11');
mySet.add({a: 1, b:2})
console.log(mySet) // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11', { a: 1, b: 2 } } 
mySet.clear();
console.log(mySet); // Set {}
mySet.add('100')
        .add('200'); 
mySet.forEach((value) => {
    console.log(value); // 100 200
})