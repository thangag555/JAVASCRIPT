//parent class
class Animals{
    constructor(name){
    this.name = name;
    }
    }
    //child class
    class Pets extends Animals{
    constructor(name, species){
    super(name);
    this.species= species;
    }
    }

    let p1=new Pets('dog','lion')
    console.log(p1)