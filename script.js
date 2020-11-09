class First{
    constructor(){
        this.hello;
    }
    hello(){
        console.log("Привет я метод родителя!");    
    }
}
const first = new First();

class Second extends First {
    constructor(){
        super();
    }
    hello(){
        first.hello();
        console.log("А я наследуемый метод!");
    }
}
const second = new Second();
second.hello();