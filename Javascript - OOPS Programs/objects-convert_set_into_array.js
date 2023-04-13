// creating a new set

let mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);
// output Set(5) {1, 2, 3, 4, 5}
// creating an array from that Set
let myArr = [...mySet]; // Here three dots ... represent the spread operator
console.log(myArr);
// output (5) [1, 2, 3, 4, 5]

//weak set

const booksWeakSet = new WeakSet(); // creates an empty weakset

//1. Only Objects as data items

booksWeakSet.add("Hello"); // gives TypeError
booksWeakSet.add({1: "Physics", 2: "chemistry", 3: "maths", 4:
"computer"}); // runs successfully

//2. No overview

booksWeakSet.forEach((value, key)=>{
    console.log(value, key);
    });

//3. Can't clear WeakSet

console.log(myBooks);
// Set(4) {'Physics', 'Chemistry', 'Maths', 'Computer'}
myBooks.clear();
// undefined
console.log(myBooks);
// Set(0) {size: 0}

console.log(booksWeakSet);
// WeakSet {{…}}
booksWeakSet.clear();
// Uncaught TypeError: booksWeakSet.clear is not a function
console.log(booksWeakSet);
// WeakSet {{…}}


