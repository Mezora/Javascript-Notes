const UserClass = class {
    // Body of the class aswell
}
export default class UserExport {
    // Body class
}

/* 
    The class becomes useful when you create an instance of the class. 
    An instance is an object containing data and behavior described by the class.

    constructor(param1, param2, ...) is a special method in the body of a class 
    that initializes the instance. That’s the place where you set the initial values 
    for the fields, or do any kind of object setup.

    3. Fields
    Class fields are variables that hold information. Fields can be attached to 2 entities:
        Fields on the class instance
        Fields on the class itself (aka static)
    The fields also have 2 levels of accessibility:
        Public: the field is accessible anywhere
        Private: the field is accessible only within the body of the class
*/
class User {
    constructor(name) {
        name;
        this.name = name;
    }
}

const myUser = new User('Kalos');
console.log(myUser); // User {name: 'Kalos}