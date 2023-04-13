//The Length Property

let nums = [1, 2, 3, 4, 5];
console.log(nums.length);

//How to Recognize an Array?

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

//Using instanceof operator

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1 instanceof Array); // true

//Using isArray() Method

const arr2 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr2)); // true
const obj = {
val1: 1,
val2: 2,
val3: 3,
val4: 4,
val5: 5
};
console.log(Array.isArray(obj)); // false
