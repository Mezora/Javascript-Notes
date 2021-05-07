/*
    La clase Object representa uno de los tipos de datos de Javascript. 
    Es es usado para guardar una colección de datos definidos y entidades 
    más complejas. Los objetos pueden ser creados utilzando el constructor
    Object() o la sintaxis literal de objeto. 
*/

// Object definition

const object1 = {a: 'foo', b: 11, c: {} }
console.log(object1) // { a: 'foo', b: 11, c: {} } 
console.log(object1.a) // foo 

const a = 'foo';
const b = 11;
const c = {}
const object2 = {a : a, b: b, c: c};
console.log(object2) // { a: 'foo', b: 11, c: {} } 
console.log(object2.b) // 11

const object3 = {a, b, c}; // Same key name as variable name
console.log(object3); // { a: 'foo', b: 11, c: {} }

// Object methods

    // Object.assign(target, ...sources)
    // target = what to apply the sources, it is returned after modification
    // sources = objects containing the properties you want to apply
    const target = {
        a: 1,
        b: 2,
    }
    const source =  {
        b: 4,
        c: 5
    }
    const source2 = {
        c: 6,
        d: 7
    }
    const returnedTarget = Object.assign(target, source, source2);
    console.log(returnedTarget); // { a: 1, b: 4, c: 6, d: 7 }
    console.log(target); // { a: 1, b: 4, c: 6, d: 7 }


    // Object.create()
    const person = {
        isHuman: false,
        printIntroduction: function() {
            console.log(`My name is ${this.name}. Am I Human? ${this.isHuman}`)
        }
    };
    const me = Object.create(person);
    me.name = 'Kalos';
    me.isHuman = true;
    me.printIntroduction(); // My name is Kalos. Am I Human? true
    oco = Object.create( {} );   // create a normal object
    oco.p = 1; // create a simple property on normal obj
    console.log(oco) // {p: 1}

    
    // Object.defineProperty(obj, prop, descriptor)
    // obj = The object on which to define the property.
    // prop = The name or Symbol of the property to be defined or modified.
    // descriptor = The descriptor for the property being defined or modified.
    const objectExample = {}
    Object.defineProperty(objectExample, 'property1', {
        value: 42,
        writable: false // In case you wanna change the value use true
    })
    objectExample.property1 = 11; // Can rewritte
    console.log(objectExample.property1) // 42
