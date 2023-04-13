class Student {
    constructor(id, name, marks){
    this.id = id;
    this.name = name;
    this.marks = marks
    }
    getMarks(){
    return this.marks
    }
    setMarks(marks){
    this.marks = marks
    }
    }
    let s = new Student(1,"harsh", 85)
    console.log(s.getMarks()) //85
    s.setMarks(78)
    s.getMarks() //78


//another example

class Student {
    constructor(id, name, marks){
    let _id = id;
    let _name = name;
    let _marks = marks
    this.getId = () => _id;
    this.getName = () => _name;
    this.getMarks = ()=> _marks;
    this.setMarks = (marks)=>{
    _marks = marks
    }
    }
    }
    let s1 = new Student(1,"harsh", 85)
    s1.getId() //1
    s1.getName() //harsh
    s1.setMarks(90)
    s1.getMarks() //90