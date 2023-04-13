let fs = require("fs");
let data = fs.readFileSync('controlflow-rating_contest.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}



let R = parseInt(readLine());
if (R<1200)
{
    console.log("ABC");
}
else if (R<2800)
{
    console.log("ARC");
}
else
{
    console.log("AGC");
}
