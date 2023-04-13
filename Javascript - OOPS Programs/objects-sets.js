//creating set

let myBooks = new Set(); // creates a new set
console.log(myBooks); // gives an empty set with size 0

//inserting values to set

// adding data in our newly created set
myBooks.add('Physics');
myBooks.add('Chemistry');
myBooks.add('Maths');
myBooks.add('Computer');
console.log(myBooks);

//Keys, Values, and Entries for Sets
myBooks.values(); // returns the values(here Set items) of Set
// Output: SetIterator {'Physics', 'Chemistry', 'Maths', 'Computer'}

//Iterating using the forEach() method
myBooks.forEach((value, key, Set)=>{
    console.log("I am value: ", value);
    console.log("I am key: ", key);
    console.log("I am Set: ", Set);
    });

//Iteration over the Set values
myBooks.forEach((value)=>{
    console.log("I am a Set item: ", value);
    });

//Iterating using for..of loop
// you can write anything in place of values, but make sure that it is the same throughout the code.
for (const values of myBooks){
console.log(values);
}