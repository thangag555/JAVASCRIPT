//convert map into array

// array of [key, value] pairs
let myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ]);
    console.log(myMap);

// using the spread operator with keys() method
let myKeyArr = [...myMap.keys()] // spreads all the keys of Map in the Array `myKeyArr`.
console.log(myKeyArr);
// using the spread operator with values() method
let myValArr = [...myMap.values()] // spreads all the values of Map in the Array `myKeyArr`.
console.log(myValArr);

//weak map
const myWeakMap = new WeakMap(); // a new empty WeakMap is created


//1. Only Objects as keys
myWeakMap.set('key1', 'Hello'); // gives TypeError
myWeakMap.set({}, 'Hello'); // runs successfully
myWeakMap.set({name: "John", rollNo: 23}, 'Hello'); // runs successfully

//2. No overview
myWeakMap.forEach((value, key)=>{
    console.log(value, key);
    });

//3. Can't clear WeakMap
console.log(myMap);
// Map(2) {'name' => 'Sufiyan', 'age' => 21}[[Entries]]No propertiessize: 0[[Prototype]]: Map
myMap.clear();
// undefined
console.log(myMap);
// Map(0) {size: 0}

console.log(myWeakMap);
// WeakMap {{…} => 'Hello', {…} => 'Hello'}
myWeakMap.clear();
// Uncaught TypeError: myWeakMap.clear is not a function
console.log(myWeakMap);
// WeakMap {{…} => 'Hello', {…} => 'Hello'}