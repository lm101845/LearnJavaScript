/**
 * @Author liming
 * @Date 2022/10/5 20:20
 **/

interface Human {

    // new (name:string): void
    //3.接口不能约束类的构造函数(接口只能约束类的公有成员)
    name: string;

    eat(): void;
}

class Asian implements Human {
    //1.类实现接口的时候，必须实现接口中声明的所有属性
    constructor(name: string) {
        this.name = name;
    }

    name: string;
    // private name: string;
    //2.接口只能约束类的公有成员

    eat() {
    }

    sleep() {
    };
}

//接口的继承——接口可以像类一样，可以相互继承，并且一个接口可以继承多个接口
interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}

interface Boy extends Man, Child {
    //继承多个接口，用逗号分开
    //接口的继承可以抽离出可重用的接口，也可以将多个接口合并为一个接口
}

let boy: Boy = {
    name: "",
    cry(): void {},
    eat(): void {},
    run(): void {}
}

//接口继承类(接口除了可以继承接口之外，还可以继承类——这个就相当于接口把类的成员都抽象了出来——即只有类的成员结构，而没有具体的实现)
class Auto{
    state = 1;
    private state2 = 10;
}

interface AutoInterface extends Auto{

}

// @ts-ignore
class C implements AutoInterface{
    state = 888;
    private state2 = 1000;
}

//此外Auto的子类也可以实现AutoInterface这个接口
class Bus extends Auto implements AutoInterface{
    //在这个子类中，我们就不用实现state属性了，因为它是Auto的子类，自然就继承了state属性
    //注：接口在抽离类的成员的时候，不仅抽离了公共成员，还抽离了私有成员和受保护成员
}


