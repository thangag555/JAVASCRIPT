let fs = require("fs");
let data = fs.readFileSync('controlflow-predict_quadrant.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}



let n = 5;
while(n>0)
{
    let value = readLine().split(" ");
    let x = value[0];
    let y = value[1];
    if(x>0 && y>0)
    console.log("Q1");
    else if(x<0 && y>0)
    console.log("Q2");
    else if(x<0 && y<0)
    console.log("Q3");
    else if(x>0 && y<0)
    console.log("Q4");
    n--;
}
