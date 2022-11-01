"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author liming
 * @Date 2022/9/26 22:58
 **/
exports.default = {};
class Animal {
    eat() {
        console.log('eat');
    }
}
// let animal = new Animal();
// 无法创建抽象类的实例，抽象类只能被继承
class Dog extends Animal {
    constructor(name) {
        super();
        //受保护成员只能在类或者子类中访问，而不能在类的实例中访问
        this.legs = 4;
        // private constructor(name:string) {
        // 这个类既不能被实例化，也不能被继承了
        // procted constructor(name:string) {
        // 表明这个类不能被实例化，而只能被继承，只能作为一个基类显示
        this.name = name;
    }
    // name:string = 'dog'
    // name?:string
    //如果没有this.name = name进行初始化，那就要手动给它一个初始值，或者设置它为可选属性
    run() {
    }
    pri() {
    }
    //私有成员只能在类的本身被调用，不能被类的实例调用，也不能被子类调用
    pro() {
    }
    sleep() {
        console.log('dog sleep');
    }
}
//只读属性，不能被更改
//只读属性，一定要被初始化(实例属性一样要初始化，如this.name = name)
Dog.food = 'bones';
console.log(Dog.prototype);
//只有constructor和run方法
console.log(Dog.food);
// console.log(dog.food)
let dog = new Dog("wangwang");
console.log(dog);
//内部属性只在实例上，而不在原型上
//dog.pri()
// dog.pro();
dog.eat();
dog.sleep();
//类的继承
class Husky extends Dog {
    constructor(name, color) {
        //子类的构造函数，必须包含super调用,super代表父类的实例
        super(name);
        this.color = color;
        this.color = color;
        //注意：this一定要在super调用之后再调用
        // this.pri()
        this.pro();
    }
}
//类的成员修饰符(默认public)
//类的静态成员可以被继承
console.log(Husky.food, '类的静态成员可以被继承');
//抽象类中的多态
class Cat extends Animal {
    sleep() {
        console.log('cat sleet');
    }
}
let cat = new Cat();
let animals = [dog, cat];
animals.forEach(item => {
    item.sleep();
});
//类的this类型，实现链式调用
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2();
class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}
new MyFlow().next().step1().next().step2();
//这个可以保证父类和子类之间接口调用的连贯性
