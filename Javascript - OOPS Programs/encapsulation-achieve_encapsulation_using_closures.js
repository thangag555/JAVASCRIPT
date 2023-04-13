function startGame() {
    var points = 0;
    function showPoints() {
    //alert(points);
    console.log(points)
    }
    showPoints();
}
    startGame();


//another example

function squareArray(){
    let data = [1,2,3,4,5,6]
    function square(){
    for(let i = 0; i<data.length;++i){
    data[i]=data[i]*2
    }
    return data
    }
    return square;
    }
    let sq = squareArray()
    let squaredArray=sq()
    console.log(squaredArray)
    // [2,4,6,8,10,12]