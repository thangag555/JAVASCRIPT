//Avoid Mutations and Side effects.

const legalAgeInTheUS = 21;
const checkLegalStatus = (age, legalAge) => {
return age >= legalAge ? 'Of legal age.' : 'Not of legal age.';
};
const johnStatus = checkLegalStatus(18, legalAgeInTheUS);
johnStatus(); // Not of legal age
legalAgeInTheUS; // 21

//Filtering Arrays

function filterArray(array, test) {
    const filteredArray = [];
    for (let item of array) {
    if (test(item)) {
    filteredArray.push(item);
    }
    }
    return filteredArray;
    };
    const mixedArray = [1, true, null, "Hello", undefined, "World", false];
    const onlyStrings = filterArray(mixedArray, item => typeof item ===
    'string');
    onlyStrings; // ['Hello', 'World']

//Transforming Array Items With Map

function transformArray(array, test) {
    const transformedArray = [];
    for (let item of array) {
    transformedArray.push(test(item));
    }
    return transformedArray;
    };
    const ages = [12, 15, 21, 19, 32];
    const doubleAges = transformArray(ages, age => age * 2);
    doubleAges; // [24, 30, 42, 38, 64];

//Reducing Arrays with Reduce

function reduceArray(array, test, start) {
    let sum = start;
    for (let item of array) {
    sum = test(sum, item)}
    return sum;
    }
    let numbers = [5, 10, 20];
    let doubleNumbers = reduceArray(numbers, (a, b) => a + b, 0);
    doubleNumbers; // 35
