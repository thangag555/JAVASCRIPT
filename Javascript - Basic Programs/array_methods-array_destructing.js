//Array Destructuring in JavaScript
const groceryList = [ 'egg', 'butter', 'bread'];
const itemOne = groceryList[0];
const itemTwo = groceryList[1];
const itemThree = groceryList[2];
console.log(itemOne, itemTwo, itemThree);

//Nested Array Destructuring in JavaScript
let [,,,[,,itemSix]] = [ 'egg', 'milk', 'butter', ['bread', 'cereals',
'rice']];
console.log(itemSix);

//The spread operator is generally used to create a clone of an array.
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCloned = [...salad];
console.log(saladCloned);

//How to Use the Rest Parameter in JS
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕',
'🥑'];
console.log(tomato);
console.log(mushroom);
console.log(rest);