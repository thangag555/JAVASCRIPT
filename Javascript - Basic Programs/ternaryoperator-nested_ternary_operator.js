var a=5;
b=10;
c=7;
var largest;
if(a>=b){
    if(a>=c){
        largest=a;
    }
    else{
        largest=c;
    }
}
else{
    if(b>=c){
        largest=b;
    }
    else{
        target=c;
    }
}

//ternaryoperator

console.log((a>=b) ? (a>=c ? a:c):b>=c?b:c);