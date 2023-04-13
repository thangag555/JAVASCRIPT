class car{
    constructor(color) {
    this.color = color;
    }
    display() {
    console.log(`This car is ${this.color} in color`);
    }
    static greet() {
    console.log('Welcome!');
    }
    }
    
    class Skoda extends car{
    modelName(){
    console.log(`This is a Skoda`);
    }
    }
    Skoda.greet(); // Welcome!