const a=function(){
    console.log("i am from function expression - a");
}

function b(a){
    console.log('hey! i am from function-b');
    a();
}

b(a);


let num=function(){
    console.log('javascript');
}
var num1=num();
let display=function(){
    console.log('language');
}
var num2=display();
function add(num1,num2){
    console.log(num1+num2);
}
add(9,9);