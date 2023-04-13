// behaviour of double equal

let a = false;
let b = true;
let c = true;
let d = false;
console.log(b == c);
//output: true
console.log(b == a);
//output: false
console.log(a == d);
//output: true
console.log(b != d);
//output: true
console.log(b != c);
//output: false


console.log(2 == 2);
//output: true, because 2 and 2 are the same.
console.log(2 == '2');
//output: true, because the string '2' gets converted into a number before comparison.
console.log(false == false);
//output: true, as the operands are the same.
console.log( false == 0 );
//output: true, as the == operator does the type conversion, and then the'0' entity is treated as false.
let student1 = {
name: 'John',
class: 10
}
let student2 = {
name: 'John',
class: 10}
let student3 = {
name: 'Peter',
class: 10
}
console.log(student1 == student1);
//output: true, as both the operands refer to the same object.
console.log(student1 == student2);
//output: false, as student1 and student2 refer to different objects.
console.log(student1 == student3);
//output: false, as student1 and student3 refer to different obj


//behaviour of triple equal operator

console.log(2 === 2);
//output: true, because 2 and 2 have the same data type and value
console.log(2 === '2');
//output: false, because the === operator doesn't do the type conversion and the data types of both operands are different.
console.log(false === false);
//output: true, as the operands have the same data type and value.
console.log( false === 0 );
//output: false, as the === operator doesn't do the type conversion and the data types of both operands are different.
let student11 = {
name: 'John',
class: 10
}
let student12 = {
name: 'John',
class: 10
}
let student13 = {
name: 'Peter',
class: 10
}
console.log(student11 === student11);
//output: true, as both the operands refer to the same object.
console.log(student11 === student12);
//output: false, as student1 and student2 refer to different objects.
console.log(student11 === student13);
//output: false, as student1 and student3 refer to different objects.