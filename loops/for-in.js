/*
    Bucle for in Javascript. Una alternativa al bucle for, para recorridos a propiedades de 
    objetos en Javascript. Cómo iterar por las propiedades y los valores de las propiedades 
    de un objeto, de manera genérica en Javascript con el bucle for ... in.
*/

const object = {a: 1, b: 2, c: 3};
for (let property in object) {
    console.log(`${property}: ${object[property]}`); // a: 1, b: 2, c:3
}

const person = {firstName: "Kalos", secondName: 'Mezora', age:16};
for (let data in person) {
    let dataPrint = '';
    console.log(data); // firstName, secondName, age
    console.log(person[data]); // Kalos, Mezora,  16
    dataPrint = data.charAt(0).toUpperCase() + data.slice(1) + ': '+ person[data];
    console.log(dataPrint); // FirstName: "Kalos", SecondName: 'Mezora', Age: 16
}