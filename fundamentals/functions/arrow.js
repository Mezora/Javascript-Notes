const todo = [
    "apple",
    "pineapple",
    "bracalet"
]

console.log(todo.map(todo => 'Buy' + todo)); // ["Buy: apple","Buy: pineapple", "Buy: bracalet"]

function arrow (element) {
    return element + 1;
}
let arrow = element => element + 1;
