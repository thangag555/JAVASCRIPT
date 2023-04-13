class Person{
    constructor(name, age, collegeName){
    this.name = name;
    this.age = age;
    this.collegeName = collegeName;
    }
    displayName(){
    return `${this.name}`;
    }
    displayAge(){
    return `${this.age}`;
    }
    displayCollageName(){
    return `${this.collageName}`;
    }
    greet(){
    console.log(`Hello I am ${this.name}, and I am from
    ${this.collegeName}`);
    }
    }

//professor class

class Professor extends Person{
    constructor(name, age, collegeName, subject, yoe){
    super(name, age, collegeName);
    this.subject = subject;
    this.yoe = yoe;
    }
    greet(){
    console.log(`Hello I am ${this.name}, I am professor at
    ${this.collegeName} and I have been teaching for past ${this.yoe} years`);
    }
    displaySubject(){
    console.log(`${this.subject}`);
    }
    }

//student class

class Student extends Person{
    constructor(name, age, collegeName, brach, rollNo){
    super(name, age, collegeName);
    this.brach = brach;
    this.rollNo = rollNo;
    }
    greet(){
    console.log(`Hello I am ${this.name}, roll no:${this.rollNo} and I
    am student at ${this.collegeName}`);
    }
    displayBranch(){
    console.log(`${this.branch}`);
    }
    }

    let s1 = new Student('Jon', 18, 'Hogwarts', 'CSE', 1101);
    console.log(s1.greet());
    //output: Hello I am Jon, roll no:1101 and I am student at Hogwarts
    let p1 = new Professor('Peter', 45, 'Hogwarts', 'Web technology', 15);
    console.log(p1.displaySubject());
    //output: web technology
    console.log(p1.displayName());
    //output: Peter