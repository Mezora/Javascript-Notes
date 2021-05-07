let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 6, 7, 8];
let arr = arr1.concat(arr2);
const mySet = new Set(arr);
console.log(mySet); // Set { 1, 2, 3, 4, 5, 6, 7, 8 } 
const uniqueArray = [...mySet];
console.log(uniqueArray); // [ 1, 2, 3, 4, 5, 6, 7, 8 ] 