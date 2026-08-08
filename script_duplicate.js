// A simple calculator script
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 5) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

console.log("Addition: 5 + 3 =", add(5, 3));
console.log("Subtraction: 5 - 3 =", subtract(5, 3));
console.log("Multiplication: 5 * 3 =", multiply(5, 3));
console.log("Division: 6 / 3 =", divide(6, 3));
/////////
function hello(){
    console.log();
}