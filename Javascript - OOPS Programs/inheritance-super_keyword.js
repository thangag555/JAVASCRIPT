class Animals{
    constructor(name){
    this.name = name;
    }
    animalName(){
    return `${name}`;
    }
    }


class Pets extends Animals{
    constructor(name, species){
    super(name);
    this.species= species;
    }
    speciesName(){
    return `${species}`;
    }
    }

let p1=new Pets('dog','lion');
console.log(p1)
console.log(new Animals('monkey'))


//static method

class Foo {
    static classMethod() {
    return 'hello';
    }
    }
    class Bar extends Foo {
    static classMethod() {
    return super.classMethod() + ', too';
    }
    }
    console.log(Bar.classMethod()); // 'hello, too'