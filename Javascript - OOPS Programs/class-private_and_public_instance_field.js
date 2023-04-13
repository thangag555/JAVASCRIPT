class Person {
    // Private instance field
    #age = 0;
    // Public instance field
    name = "";
    constructor(name){
    this.name = name;
    }
    birthday() {
    this.#age++;
    }
    displayAge(){
    return `Age: ${age}`;
    }
    }
    let p1 = new Person('Jon');
    console.log(p1.name); // Jon
    p1.name = 'Peter';
    console.log(p1.name); // Peter
    p1.birthday;
    console.log(p1.displayAge); // 1
    p1.age = 10; // returns error