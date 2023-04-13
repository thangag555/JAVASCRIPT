//The push() method:
const groceryList = [ 'egg', 'butter', 'bread'];
var newLength = groceryList.push('cereals','milk');
console.log(newLength);
console.log(groceryList);

//The unshift() method
const groceryList1 = [ 'egg', 'butter', 'bread'];
var newLength = groceryList1.unshift('cereals','milk');
console.log(newLength);
console.log(groceryList1);

//The pop() method
const groceryList2 = [ 'egg', 'butter', 'bread', 'cereals', 'rice' ];
const deletedItem = groceryList2.pop();
console.log(deletedItem);
console.log(groceryList2);

//The shift() method
const groceryList3 = [ 'egg', 'butter', 'bread', 'cereals', 'rice' ];
const deletedItem1 = groceryList.shift();
console.log(deletedItem1); // egg
console.log(groceryList3); // [ 'butter', 'bread', 'cereals', 'rice']

//copy an array
const groceryList4 = [ 'egg', 'butter', 'bread', 'cereals', 'rice' ];
// Creating clone of groceryList
const groceryListClone = groceryList4.slice();
console.log(groceryList4);
console.log(groceryListClone);