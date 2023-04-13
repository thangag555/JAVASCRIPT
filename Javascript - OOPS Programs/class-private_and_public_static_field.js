class Person {
    // Private instance field
    static #age = 0;
    // Public instance field
    static name = "";
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
    console.log(p1.name);
    // Jon
    console.log(p1.age);
    // Displays error