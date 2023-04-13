let student = {
    id: 12,
    name: "Isaac",
    marks: 81,
    setMarks: function(newMarks){
    if(isNaN(newMarks)){
    throw new Error(`${newMarks} is not a number`)
    }
    marks = newMarks
    }
    }
console.log(student)

//changing marks
student.marks = "Eighty Five"
console.log(student)

//check inside function instruction before insertion
    student.setMarks("Eighty Five")
    /* VM563:7 Uncaught Error: Eighty Five is not a number
    at Object.setMarks (<anonymous>:7:10)
    at <anonymous>:1:9
    */

