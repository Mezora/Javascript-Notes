/*
    Comma Operator:
        The comma operator in JavaScript evaluates each of its operands. It returns the value 
        of the last operand. Add multiple expressions using the comma operator.
*/

for (let a = 0, b = 5; a <= 5; a++, b--) {
    // Here what you want
}

myFunc();
function myFunc() {
  let a = 1;
  console.log(a += 2, a); // 3 3
}