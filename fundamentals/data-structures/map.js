// Map it's similar a primitive object
let map = new Map();
map.set("name", "Kalos")
        .set("lastname", "lazo")
        .set("age", 16);
console.log(map); // Map { 'name' => 'Kalos', 'lastname' => 'lazo', 'age' => 16 } 
// Map elements (same as Set)
console.log(map.size); // 3
console.log(map.has('money')); // false
console.log(map.get('name')); // Kalos
map.set("name", "Mezora");
console.log(map); // Map { 'name' => 'Kalos', 'lastname' => 'lazo', 'age' => 16 } 
map.delete('lastname');
console.log(map); // Map { 'name' => 'Mezora', 'age' => 16 } 


let zoo = new Map();
// KEY => VALUE
zoo.set('Zebra', 5)
        .set('Monkey', 2)
        .set('Gorilla', 3);
console.log(zoo); // Map { 'Zebra' => 5, 'Monkey' => 2, 'Gorilla' => 3 } 
zebraCount = zoo.get('Zebra');
console.log(zebraCount); // 5
for (let [key, value] of zoo) {
        console.log(key + ': ' + value) // Zebra: 5, Monkey: 2, Gorilla: 3
}