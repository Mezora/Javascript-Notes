/*
    Symbol es un tipo de dato cuyo valor en único e inmutable.
    sus valores se pueden utilizar como identificadores de propiedades
    de objetos. Cada valor del tipo Symbol tiene asociado un valor del tipo
    String o Undefined que sirve como descripción del símbolo.
    
    La función Symbol primitive data type es el constructor de valores del 
    tipo Symbol. Cuando Symbol es llamado como función nos devuelve una 
    nuevo valor del tipo Symbol. El constructor Symbol no debe ser usado
    con el operador new. Tampoco debe ser extendido mediante clases.

    Sintaxis: Symbol([description])

    El parámetro descripción es un valor opcional de tipo String 
    Únicamente sirve como descripción del símbolo que puede ser 
    útil para depurar. No permite el acceso al símbolo que describe.
*/

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

/*
El código anterior crea tres símbolos nuevos. Hay que destacar que 
Symbol("foo") no convierte la cadena "foo" en un símbolo, sino que 
crea un símbolo nuevo que tiene la misma descripción.
*/

console.log(Symbol("foo") === Symbol("foo")) // False
var id = Symbol('example');
console.log(id) // Symbol(example)

/* Uses of Symbol data type */

var obj = {
    id: 12345
}
obj.id = 123;
console.log(obj.id); // 123, Data was rewritted


id2 = Symbol('userId')
var obj2 = {
    // Use [] to use an existing symbol.
    [id2]: 12345
}
obj2.id = true;
console.log(obj2); // id: true, [Symbol(userId)]: 12345, Data can't be overwritted


function createObject() {
    var obj = {  };
    var id = Symbol('id');
    obj[id] = 0;

    return {
        setId(valor) {
            return obj[id] = valor;
        },
        getId() {
            return obj[id];
        },
        get () {
            return obj;
        }
    }
}

var x = createObject();
var object = x.get();
console.log(object);  // { [Symbol(id)]: 0 }
x.setId(11); // 11
var getId = x.getId();
console.log(getId)  // 11