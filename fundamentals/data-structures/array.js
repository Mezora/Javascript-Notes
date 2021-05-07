// Array; Ordered collection of data.
let example = new Array();

let fruits = ["Apple", 'Orange', 'Plum'];
console.log(fruits[1]) // Orange

let arr = [ 'Apple', { name: 'Kalos' }, true, function() { alert('Hey'); } ];
console.log(arr[1].name) // Kalos

// Queue: In computer science means ordered collection of elements.
    // Pop: Takes an element from the end.
    let arrFruits = ["Apple", "Orange", "Plum"];
    arrFruits.pop();
    console.log(arrFruits); // ["Apple", "Orange"];

    // Push: Appends an element to the end.
    arrFruits.push("Pear");
    console.log(arrFruits); // ["Apple", "Orange", "Pear"];

    // Shift: Get an elemento from the beginning.
    arrFruits.shift();
    console.log(arrFruits); // ["Orange", "Pear"]; 

    // Unshift: Add an element to the beginning of the array.
    arrFruits.push("Orange", "Peach");
    arrFruits.unshift("Pinapple", "Lemon")
    console.log(arrFruits) // [ 'Pinapple', 'Lemon', 'Orange', 'Pear', 'Orange', 'Peach' ] 

    // Reverse: Method that reverse array order.
    arrFruits.reverse();
    console.log(arrFruits); // [ 'Peach', 'Orange', 'Pear', 'Orange', 'Lemon', 'Pinapple' ] 

    // Sort: Order alphabeticlly string items
    arrFruits.sort();
    console.log(arrFruits); // [ 'Lemon', 'Orange', 'Orange', 'Peach', 'Pear', 'Pinapple' ]

    // Slice method:  Get array data by parameter range
    spliceArray = arrFruits.slice(1, 4);
    console.log(spliceArray); // ['Orange', 'Orange', 'Peach'];
    
    // Splice method: Select custom array size and custom element.
    arrFruits.splice(1, 3, 'splice here');
    console.log(arrFruits); // [ 'Lemon', 'splice here', 'Pear', 'Pinapple' ] 

    // Concat: Joint two or more arrays and return new one.
    let array1 = ["Kalos", "Mezora"];
    let array2 = ["Peru", "Lima"];
    let array3 = ["16", "1.74"];
    let arrayCombined = array1.concat(array2, array3);
    console.log(arrayCombined); // [ 'Kalos', 'Mezora', 'Peru', 'Lima' , '16, '174]