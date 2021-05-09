/*

        Local Storage
        localStorage is a property that allows JavaScript sites and apps to save key-value pairs 
        in a web browser with no expiration date. This means the data stored in the browser will 
        persist even after the browser window is closed.


        What is Window.localStorage?
        The localStorage mechanism is available via the Window.localStorage property. 
        Window.localStorage is part of the Window interface in JavaScript, which represents a 
        window containing a DOM document.

        How does localStorage work?
        To use localStorage in your web applications, there are five methods to choose from:
        setItem(): Add key and value to localStorage
        getItem(): This is how you get items from localStorage
        removeItem(): Remove an item by key from localStorage
        clear(): Clear all localStorage
        key(): Passed a number to retrieve the key of a localStorage

*/
if (typeof(Storage) !== "undefined") {
        window.localStorage.setItem('name', 'Mezora');
        const person = {
                name: 'Mezora',
                location: 'Peru'
        }
        window.localStorage.setItem('user', JSON.stringify(person));
        console.log(window.localStorage.getItem('user')); // {"name":"Mezora","location":"Peru"}
        console.log(JSON.parse(window.localStorage.getItem('user')));  // {name: "Mezora", location: "Peru"}
        window.localStorage.removeItem('name');
        var keyName = window.localStorage.key(0); // Key in index 0
        console.log(keyName.value);
} else {
        console.log("Your browser does not support localStorage functionality");
}

// window.localStorage.clear(); clear all key
/*
        LocalStorage Limitations:
        Do not store sensitive user information in localStorage
        It is not a substitute for a server based database as information is only stored on the browser
        localStorage is limited to 5MB across all major browsers
        localStorage is quite insecure as it has no form of data protection and can be accessed by any code on your web page
        localStorage is synchronous, meaning each operation called would only execute one after the other
*/