let fs = require("fs");
let data = fs.readFileSync('controlflow-odd_even.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}




let num=parseInt(readLine());
if(num%2==0)
{
    console.log("even");

}
else{
    console.log('odd');
}