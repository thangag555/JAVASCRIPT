class Person {
    constructor(name) {
    this.name = name;
    }
    sayName() {
    console.log(this.name);
    }
    }
    let p1 = new Person('Peter');
    setTimeout(p1.sayName, 100); // undefined


    //ways to fix the above issue

    //wrapper function

    class demo {
        constructor(name) {
        this.name = name;
        }
        sayName() {
        console.log(this.name);
        }
        }
        let p11 = new demo('Peter');
        setTimeout(() => p11.sayName(), 100) //Peter


//by binding the method to object

class display {
    constructor(names) {
    this.names = this.names.bind(this);
    }
    sayName() {
    console.log(this.names);
    }
    }
    let p = new display('Peter');
    setTimeout(p.sayName, 100); // Peter