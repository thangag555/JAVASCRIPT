let student = function(){
    var id= 12;
    var name= "Isaac";
    var marks= 81;
    var obj = {
    setMarks: function(newMarks){
    if(isNaN(newMarks)){
    throw new Error(`${newMarks} is not a number`)}
    marks = newMarks
    },
    getMarks: function(){return marks},
    getName: function(){return name},
    getId: function(){return id}
    }
    return obj;
    }()
    console.log(student.getMarks()) //81
    student.setMarks(98)
    console.log(student.getMarks()) //98
    student.setMarks("Ninty")
    /*
    VM2179:8 Uncaught Error: Ninty is not a number
    at Object.setMarks (<anonymous>:8:13)
    at <anonymous>:21:9
    */