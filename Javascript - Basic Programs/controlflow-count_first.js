let n = parseInt(readLine());
let a0 = parseInt(readLine());
let fs = require("fs");
let data = fs.readFileSync('controlflow-count_first.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}




let count = 1;
for(let i=1; i<n; i++)
{
    let num = parseInt(readLine());
    if(num==a0)
    count++;
}                       
console.log(count);
