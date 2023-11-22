/************************************************** */
/****************YOUR CODE HERE************* */
function add(a,b) {
    console.log(a + b)
}

function subtract(a,b) {
    console.log(a - b)
}

function multiply(a,b) {
    console.log(a * b)
}

function divide(a,b){
    console.log(a / b)
}

function square(a){
    console.log(a ** 2)
}

function squareRoot(a){
    console.log(a ** (1 / 2))
}

function concatenate(string1,string2) {
    console.log(string1 + string2)
}

/******************************OUR CODE BELOW******************************** */

if (typeof add === 'undefined') {
    console.log(add)
    add = undefined;
}
if (typeof subtract === 'undefined') {
    subtract = undefined;
}
if (typeof multiply === 'undefined') {
    multiply = undefined;
}
if (typeof divide === 'undefined') {
    divide = undefined;
}
if (typeof square === 'undefined') {
    square = undefined;
}
if (typeof squareRoot === 'undefined') {
    squareRoot = undefined;
}
if (typeof concatenate === 'undefined') {
    concatenate = undefined;
}

module.exports = { add, subtract, multiply, divide, square, squareRoot, concatenate }
