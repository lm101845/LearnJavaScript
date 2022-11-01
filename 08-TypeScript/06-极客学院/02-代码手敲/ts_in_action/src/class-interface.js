"use strict";
/**
 * @Author liming
 * @Date 2022/10/5 20:20
 **/
class Asian {
    //1.类实现接口的时候，必须实现接口中声明的所有属性
    constructor(name) {
        this.name = name;
    }
    // private name: string;
    //2.接口只能约束类的公有成员
    eat() {
    }
    sleep() {
    }
    ;
}
let boy = {
    name: "",
    cry() { },
    eat() { },
    run() { }
};
//接口继承类(接口除了可以继承接口之外，还可以继承类——这个就相当于接口把类的成员都抽象了出来——即只有类的成员结构，而没有具体的实现)
class Auto {
    constructor() {
        this.state = 1;
        this.state2 = 10;
    }
}
// @ts-ignore
class C {
    constructor() {
        this.state = 888;
        this.state2 = 1000;
    }
}
//此外Auto的子类也可以实现AutoInterface这个接口
class Bus extends Auto {
}
