let student = function(){
    var id= 12;
    var name= "Isaac";
    var marks= 81;
    function setMarks(newMarks){
    if(isNaN(newMarks)){
    throw new Error(`${newMarks} is not a number`)
    }
    marks = newMarks
    }
    }
    
    student.setMarks(20)
    This does not seem to work because "student" can not reference the inner
    function "setMarks" directly. Let us understand how closure helps in
    solving this problem.
    ```javascript
    let student = function(){
    var id= 12;
    var name= "Isaac";
    var marks= 81;
    var obj = {
    setMarks: function(newMarks){
    if(isNaN(newMarks)){
    throw new Error(`${newMarks} is not a number`)
    }
    marks = newMarks
    }
    }
    return obj;
    }()
    student.setMarks(92) // Works now.