//Access an Array item using the index position

const myArray = ["An", "article", "from", "Student", "Topics", 1, 5, true,
null]; // 9 elements in total
console.log(myArray[2]);

//Changing an Array Element
const myArray1 = [1, 2, 3, 4, 5] // 5 elements in total
myArray1[2] = 7;
console.log(myArray1);

//Loop Over an Array
const myArray2 = [1, 2, 3, 4, 5] // 5 elements in total
for(var i = 0; i < myArray2.length; i++){
myArray2[i] = myArray2[i] * myArray2[i];
}
console.log(myArray2);

//Add an Item to the End of an Array
const vehicles = ['car', 'bike', 'truck'];
vehicles.push("bus");
console.log(vehicles);

//Remove an Item from the End of an Array
const vehicles1 = ['car', 'bike', 'truck', 'bus'];
vehicles1.pop();
console.log(vehicles1);

//Remove an Item from the Beginning of an Array
const vehicles2 = ['car', 'bike', 'truck', 'bus'];
vehicles2.shift();
console.log(vehicles2);

//Add an Item to the Beginning of an Array
const vehicles3 = ['car', 'bike', 'truck', 'bus'];
vehicles3.unshift("van");
console.log(vehicles3);

//Find the Index of an Item in the Array
const vehicles4 = ['car', 'bike', 'truck', 'bus'];
console.log(vehicles4.indexOf("truck"));

//Remove an Item by the Index Position
const marks = ['zero', 'one', 'two', 'three', 'four'];
console.log(marks);
marks.splice(1, 2);
console.log(marks);

//Remove Items from an Index Position
const marks1 = ['zero', 'one', 'two', 'three', 'four'];
console.log(marks1);
marks1.splice(2);
console.log(marks1);

//Add item at an Index Position
const marks2 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
'seven'];
console.log(marks2);
marks2.splice(2, 0, "newTwo", "newThree", "newFour");
console.log(marks2);

//Replace an item at an index position
const marks3 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
'seven'];
console.log(marks3);
marks3.splice(3, 1, "newThree");
console.log(marks3);

//Copy an Array
let floors = ["ground", "first", "second", "third", "fourth", "fifth",
"sixth", "seventh"];
console.log(floors);
let allFloors = floors.slice();
console.log(allFloors);
let nFloors = floors.slice(3);
console.log(nFloors);
let threeFloors = floors.slice(0, 3);
console.log(threeFloors);

//How Arrays are objects?
let a = 3;
console.log("type of 3 is", typeof a);
let b = "Student";
console.log("type of 'Student' is", typeof b);
let c = {name: "John", rollno: 23, isRegular: true};
console.log("type of c is", typeof c);
let d = [1, 2, "hello", true];
console.log("type of d is", typeof d);