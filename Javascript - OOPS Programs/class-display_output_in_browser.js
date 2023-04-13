class person{
    constructor(name){
        this.name=this.name.bind(this);
    }
    sayName(){
        console.log(this.name);
    }
}

let p1=new person('peter');
setTimeout(p1.sayName);