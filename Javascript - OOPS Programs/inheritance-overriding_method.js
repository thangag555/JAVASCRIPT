//parent class
class Animals{
constructor(name){
this.name = name;
}
animalName(){
return `${name}`;
}
greet(){
return `Hello I am ${name}`;}
}

//child class
class Pets extends Animals{
constructor(name, species){
super(name);
this.species= species;
}
speciesName(){
return `${species}`;
}
//this method will override the "greet()" method of Animals class
greet(){
return `Hello my name is ${this.name}, I am a ${this.species}`;
}
}
let pet1 = new Pets('Tom', 'Dog');
console.log(pet1.greet());