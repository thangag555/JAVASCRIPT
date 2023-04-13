//parent class
class Animals{
    constructor(name){
    this.name = name;
    }
    animalName(){
    return `${name}`;
    }
    }
    //Pets extending the parent class
    class Pets extends Animals{
    constructor(){
    console.log('Pet class is created');
    }
    }

let p1=new Animals('tiger');
console.log(p1);
let p2=new Pets
console.log(p2)