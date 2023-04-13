//indexOf()
const groceryList = [ 'egg', 'butter', 'bread', 'cereals' ];
console.log(groceryList.indexOf('bread'));
console.log(groceryList.indexOf('peanut'));

//find()
const arr = [12, 33, 17, 16, 15, 18];
const evenElement = arr.find(item => item % 2 == 0);
console.log(evenElement)

//filter()
const arr1 = [12, 33, 17, 16, 15, 18];
const evenElements = arr1.filter(items => items % 2 == 0);
console.log(evenElements)

//includes
const groceryList1 = [ 'egg', 'butter', 'bread', 'cereals' ];
console.log(groceryList1.includes('bread'));
console.log(groceryList1.includes('peanut'));

//Skipping a Value in an Array
let [itemOne1, , itemThree1] = ['egg', 'butter', 'bread'];
console.log(itemOne1);
console.log(itemThree1); 

//Assigning a Default Value to a Variable
let [itemOne2 , itemTwo2, itemThree2 = 'bread'] = ['egg', 'butter'];
console.log(itemOne2, itemTwo2, itemThree2);