//creating map

let deviceColors = new Map(); // creates a new map
console.log(deviceColors); // gives an empty map with size 0

// adding data in our newly created map
deviceColors.set('phone', 'black');
deviceColors.set('laptop', 'silver');
deviceColors.set('headphone', 'red');
deviceColors.set('powerbank', 'white');
console.log(deviceColors);

//getting the values of a map
console.log(deviceColors.get('phone')); // getting the value associated with key 'phone'

//getting keys,values,entries for map
// 1. keys()
console.log(deviceColors.keys()); // using keys() method to get the keys of the Map.// output MapIterator{'phone', 'laptop', 'headphone', 'powerbank'}
// 2. values()
console.log(deviceColors.values()); // using values() method to get the values of the Map.
// output MapIterator{'black', 'silver', 'red', 'white'}
// 3.entries()
console.log(deviceColors.entries()); // using entries() method to get the entries of the Map.
// output MapIterator {'phone' => 'black', 'laptop' => 'silver', 'headphone' => 'red', 'powerbank' => 'white'}

//iteration using foreach() method
// there are three arguments in the Map.forEach() method with order as: value, key and map.
deviceColors.forEach((value, key, map)=>{
console.log("I am value: ", value);
console.log("I am key: ", key);
console.log("I am map: ", map);
});

//iteration over map keys only
// Here we avoided the third argument that is map, as we just wanted to iterate over the keys of Map.
deviceColors.forEach((value, key)=>{
console.log("I am a key: ", key);
});

//iteration over map values only
// Here also we avoided the third argument that is map, as we just wanted to iterate over the values of Map.
deviceColors.forEach((value, key)=>{
console.log("I am a value: ", value);
});

//iteration using for..of loop
// you can write anything in place of entries, but make sure that its name is the same throughout the code.
for (const entries of deviceColors){
console.log(entries);
}

//iteration using map keys
// you can write anything in place of keys, but make sure that its name is the same throughout the code.
for (const keys of deviceColors.keys()){
console.log(keys);
}

//iteration using map values
// you can write anything inplace of values, but make sure that its name is same throught the code.
for (const values of deviceColors.values()){
console.log(values);
}

//Iterating over the Map keys and values simultaneously by destructuring key and value of Map entry

// you can write anything in place of values, but make sure that its name is the same throughout the code.
for (const [keys,values] of deviceColors){
console.log(`${keys} => ${values}`);
}

//Creating a Map from an Object
// array of [key, value] pairs
let myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ]);
    console.log(myMap);

// here the data of myObj is used to create a Map having the same data
let myObj = {
    name: "Sufiyan",
    age: 21,
    };
    console.log(Object.entries(myObj));
    let myMap1 = new Map(Object.entries(myObj));
    console.log(myMap1);