let iterable = [10, 20, 30];
for (let value of iterable) {
    value += 1;
    console.log(value); // 11, 21, 31
}

let names = ['Kalos', 'Luis', 'Jose', 'Miguel'];
for (let name in names){
    name = 'Mi nombre es: ' + names[name];
    console.log(name); // Mi nombre es: Kalos, Mi nombre es: Luis ...
}

let obj = {age: 16, name: 'Kalos'};
for (let data in obj) {
    console.log(data); // age, name
    console.log(obj[data]); // 16, Kalos
}