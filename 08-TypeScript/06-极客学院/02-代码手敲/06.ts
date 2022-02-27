// 类实现接口的时候，必须要实现接口中所有的属性
interface Human { 
    name: string;
    eat():void
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string
    eat() { 
        console.log('people eat');
    }
    sleep() {}
}

class Auto { 
    state = 1;
}

interface AutoInface extends Auto { 

}

class C implements AutoInface {
    state = 2;
}

class Bus extends Auto implements AutoInface {
    
}