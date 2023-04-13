//concat()
const arrOne = [5, 10, 15];
const arrTwo = [20, 25, 30];
const arrThree = [35, 40, 45];
const arrFour = arrOne.concat(arrTwo);
const arrFive = arrOne.concat(arrTwo, arrThree);
console.log(arrFour);
console.log(arrFive);

//every()
const arr1 = [11, 33, 17, 9, 15, 23];
const arr2 = [12, 33, 17, 16, 15, 18];
let op = arr1.every(item => item % 2 != 0);
let op1 = arr2.every(items => items % 2 != 0);
console.log(op)
console.log(op1)

//forEach()
const arr = [12, 33, 17, 16, 15, 18];
arr.forEach(item => console.log(item));

//join()
const groceryList= [ 'Egg', 'Butter', 'Bread', 'Cereals' ];
console.log(groceryList.join());
console.log(groceryList.join(''));
console.log(groceryList.join('-'));

//map()
const arr3 = [12, 33, 17, 16, 15, 18];
let newArr = arr3.map(item => item = item*2);
console.log(newArr);

//reduce()
const arr4 = [2, 4, 6, 8];
console.log(arr4.reduce((previousValue, currentValue) => previousValue +
currentValue));

//reduceRight()
const arr5 = [2, 4, 6, 8];
console.log(arr5.reduce((previousValue, currentValue) => previousValue +
currentValue));
// output: 20

//reverse()
const groceryList1= [ 'Egg', 'Butter', 'Bread', 'Cereals' ];
groceryList1.reverse();
console.log(groceryList1);

//slice()
const groceryList2= [ 'egg', 'butter', 'bread', 'cereals', 'rice' ];
console.log(groceryList2.slice(2));
console.log(groceryList2.slice(2, 4));

//some()
const arr11 = [2, 4, 6, 8, 10, 12];
const arr12 = [12, 33, 17, 16, 15, 18];
let op11 = arr1.some(item => item % 2 != 0);
let op12 = arr2.some(item => item % 2 != 0);
console.log(op11)
console.log(op12)

//sort()
const multipleOfFive = [ 10, 15, 5, 25, 20];
multipleOfFive.sort();
console.log(multipleOfFive);

//splice()
const days = ['Monday', 'Wednesday', 'Thursday', 'Saturday'];
days.splice(1, 0, 'Tuesday');
console.log(days);
days.splice(4, 1, 'Friday');
console.log(days);

//toString()
let arr13 = [1, '2', 3];
console.log(arr13.toString())

//lastIndexOf()
const str = "This is a string which will represent the last index of is";
console.log(str.lastIndexOf('is'));