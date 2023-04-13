class Student{
    constructor(firstNameInput, lastNameInput, ageInput, rollNoInput){
    this.firstName = firstNameInput;
    this.lastName = lastNameInput;
    this.age = ageInput;
    this.rollNo = rollNoInput;
    }
    name(){
    return `The student's name is ${firstName} ${lastName}`;
    }
}

let obj=new Student('ram','ravi',40,1001);
console.log(obj);

