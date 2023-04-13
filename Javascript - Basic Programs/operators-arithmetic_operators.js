//addition operator

var num1 = 22;
var num2 = 28;
var num3 = 10.2;
var num3 = 20.6;
console.log("22 + 28 = " + num1 + num2); // 22 + 28 = 2228
console.log("22 + 28 = " + (num1 + num2)); // 22 + 28 = 50
console.log("10.2 + 20.6 = " + (num1 + num2)); // 10.2 + 20.6 = 30.8

//subtraction operator

var num1 = 28;
var num2 = 22;
var num3 = 28.50;
var num4 = 22.75;
console.log("28 - 22 = " + num1 - num2); // 28 - 22 = NaN
console.log("28 - 22 = " + (num1 - num2)); // 28 - 22 = 6
console.log("28.50 - 22.75 = " + (num3 - num4)); // 28.50 - 22.75 = 5.75

//multiplication operator

var num1 = 28;
var num2 = 22;
console.log("28 * 22 = " + (num1 * num2)); // 28 * 22 = 616
var num1 = 28;
var num2 = -22;
console.log("28 * -22 = " + (num1 * num2)); // 28 * -22 = -616
var num1 = 'student';
var num2 = 22;
console.log("student * 22 = " + (num1 * num2)); // student * 22 = NaN

//division operator

var num1 = 28;
var num2 = 22;
console.log("28 / 22 = " + (num1 / num2)); // 28 / 22 = 1.2727272727272727
var num1 = 28;
var num2 = 0;
console.log("28 / 0 = " + (num1 / num2)); // 28 / 0 = Infinity

//modulus operator

var num1 = 28;
var num2 = 22;
console.log("28 % 22 = " + (num1 % num2)); // 28 % 22 = 6
var num1 = 1;
var num2 = 2;
console.log("1 % 2 = " + (num1 % num2)); // 1 % 2 = 1
123 % 10; // returns 3

//exponentiation operator

var num1 = 2;
var num2 = 2;
console.log("2 ** 2 = " + (num1 ** num2)); // 2 ** 2 = 4

//increment operator

var x = 20;
x++; // x returns 21
console.log(x)
var x = 20;
var y = x++; // y is 20, x is 21
console.log(x)
console.log(y)
var x = 20;
var y = ++x; // y is 21, x is 21
console.log(x)
console.log(y)

//decrement operator

var x = 20;
x--; // x returns 19
console.log(x)
var x = 20;
var y = x--; // y is 20, x is 19
console.log(x)
console.log(y)
var x = 20;
var y = --x; // y is 19, x is 19
console.log(x)
console.log(y)

//unary negation operator

const x = +3;
const y = -x;
console.log(x) // x = 3
console.log(y) // y = -3
const x = -"0xFF"
console.log(x) // x = -255
const x = -"123e-5"
console.log(x) // x = -0.00123
const x = -"3.14"
console.log(x) // x = -3.14
console.log(-true); // -1
console.log(-false); // -0
console.log(-null); // -0
console.log(-function(val){ return val }); // NaN
console.log(-1n); // -1n

//unary plus operator

const x = 1;
const y = "2";
console.log(+x); // 1
console.log(+y); // 2
+true // 1
+false // 0
+null // 0