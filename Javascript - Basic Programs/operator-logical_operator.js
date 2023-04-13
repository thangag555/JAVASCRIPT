//logical AND operator

let value_1 = 10;
let value_2 = -10;
if(value_1 > 0 && value_2 > 0){
console.log("Both values are positive");
// some other code based on the decision.
}else{
console.log("Either one or both the values are negative. Please enter the positive values only!");
}
// Output: Either one or both the values are negative. Please enter the positive values only!

//logical OR operator

let value_11 = -10;
let value_12 = -55;
if(value_11 > 0 || value_12 > 0){
console.log("Either one or both the values are positive. Please enter negative values only!");
// some other code based on the decision.
}
else{
console.log("Both the values are negative.");
}

//logical NOT operator

const val_1 = 5;
const val_2 = -1;
if(!(val_1 < 0 || val_2 < 0)){
console.log(true)
}else{
console.log(false);
}

//logical DOUBLE NOT operator

const val_11 = !!1; // number one
console.log(val_11);
const val_12 = !!0; // number zero
console.log(val_12);
const val_13 = !!'Hello'; // a string Hello
console.log(val_13);
const val_14 = !!''; // an empty string
console.log(val_14);
const val_15 = !!true; // boolean true
console.log(val_15);

//chain of AND operator

// Case: 1
let ourCondition = 1 && 2 && 0 && false && 3;
console.log(ourCondition); // 0 is returned
// Case: 2
let ourCondition1 = 1 && 2 && false && 3;
console.log(ourCondition1); // false is returned
// Case: 3
let ourCondition2 = 1 && 2 && 3;
console.log(ourCondition2); // 3 is returned

//chain of OR operator

// Case: 1
let ourCondition01 = false || 0 || 1 || true || 3;
console.log(ourCondition01); // 1 is returned
// Case: 2
let ourCondition11 = 0 || true || 1 || 2 || 3;
console.log(ourCondition11); // true is returned
// Case: 3
let ourCondition12 = "" ||false || NaN || 0;
console.log(ourCondition12); // hello is returned