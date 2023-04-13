function func1(){
    console.log(arguments[0]);
    arguments[1]="i am new value";
    console.log("in function func1,y=",arguments[1]);
}

x="hello guys";
y="i am old value";
func1(x,y);
console.log("in global,y=",y);

console.log("-----------------------");

function myfunc(a){
    console.log(a);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

myfunc("one","two");