class Student{
    constructor(Firstname,Lastname,Age,Rollno){
        this.firstname=Firstname;
        this.lastname=Lastname;
        this.age=Age;
        this.rollno=Rollno;
    }
}
let obj=new Student('ram','ravi',30,123);
console.log(obj);



class Coder extends Student{
    constructor(firstNameInput, lastNameInput, ageInput, rollNoInput,
    language){
    super(firstNameInput, lastNameInput, ageInput, rollNoInput,language)
    this.language = language;
    }
    displayLanguage(){
    return (`${this.age} codes in ${this.language}`);
    }
    }
    let c1 = new Coder('raj','ramji',40,123,'english')
    let c2= c1.displayLanguage()
    console.log(c1)
    console.log(c2)


    