//Execution of JavaScript Code "Synchronously"

console.log(10);
const goodFunc = () => {
console.log('good');
}
const bestFunc = () => {
goodFunc();
console.log('best');
}
bestFunc();

//The Callbacks in JavaScript

function One(){
    console.log("One is called");
    }
    One();
    function Two(callback){
    console.log("Two is called");
    callback();
    }
    Two(One);
    setTimeout(()=>{
        console.log("I am from setTimeout");
        }, 2000)
    setTimeout(function CallbackHere(){
        console.log("I am from setTimeout");
        }, 2000)

//blocking

const fetchData = (anyURL) => {
    setTimeout(() => {
    console.log('Asynchronous Code here');
    }, 3000);
    // requestedData = ...code
    //return dataFetched;
    }
    function someFunction(){
    // function code here
    }
    fetchData('url here');
    someFunction();

//The Event Loop and the Callback Queue in JavaScript

console.log("I am start");
setTimeout(function iAmCallBack() {
console.log("I am a callback inside setTimeout() method")
}, 4000)
console.log("I am end");

//promises

const promIse = new Promise((resolve, reject) => {
    let anyCondition = false;
    if(anyCondition) {
    resolve('Promise is resolved');
    } else {
    reject('Promise is rejected');
    }
    }).then((message)=>{
    console.log(message);
    }).catch((message)=>{
    console.log(message);
    })
    //Output: Promise is rejected