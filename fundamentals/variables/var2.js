// Problem with var

var greeter = "Hey, hi!";
var times = 4;

if (times > 3) {
    var greeter = "Say hello instead!";
}

console.log(greeter); // Say hello instead