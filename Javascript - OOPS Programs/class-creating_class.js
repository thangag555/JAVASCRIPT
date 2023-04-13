class student{
    constructor(firstname,lastname,age,rollno){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.rollno=rollno;
    }
}

let obj=new student('thanga','ganesh',30,111);
console.log(obj);

console.log("-----------------------");

class stud{
    constructor(fnameinput,lnameinput,ageinput,rollnoinput){
        this.fstname=fnameinput;
        this.lstname=lnameinput;
        this.studage=ageinput;
        this.studrollno=rollnoinput;
    }
}

let obj1=new stud("ravi","ram",30,201);
console.log(obj1);