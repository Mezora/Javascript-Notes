// Weak set: difference with set to save values need to add one by one

const ws = new WeakSet();
let value1 = {"value1": 1};
let value2 = {"value2": 2};
let value3 = {"value3": 3};
ws.add(value1);
ws.add(value2);
console.log(ws);
console.log(ws.has(value1)) // True