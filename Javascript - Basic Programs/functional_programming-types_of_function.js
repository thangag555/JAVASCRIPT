//First Class Functions

const helloWorld = () => {
    console.log("Hello, World"); // Hello, World
    };
    helloWorld();

//Callback Functions

const testValue = (value, test) => {
    if (test(value)) {
    return `${value} passed the test`;
    } else
    return `${value} did not pass the test`;
    };
    const checkString = testValue('Twitter', string => typeof string ==='string');
    checkString; // Twitter passed the test

//Asynchronous Functions
const checkString1 = testValue('Twitter', value => typeof value === 'string');
checkString1;