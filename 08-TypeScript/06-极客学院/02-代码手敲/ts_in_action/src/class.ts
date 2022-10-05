/**
 * @Author liming
 * @Date 2022/9/26 22:58
 **/
export default {}

abstract class Animal {
    eat() {
        console.log('eat')
    }

    abstract sleep(): void;

    //抽象类中，也可以不指定方法的具体实现，这个就构成了一个抽象方法
}

// let animal = new Animal();
// 无法创建抽象类的实例，抽象类只能被继承


class Dog extends Animal {

    constructor(name: string) {
        super();
        // private constructor(name:string) {
        // 这个类既不能被实例化，也不能被继承了

        // procted constructor(name:string) {
        // 表明这个类不能被实例化，而只能被继承，只能作为一个基类显示
        this.name = name
    }

    public name: string;
    // name:string = 'dog'
    // name?:string
    //如果没有this.name = name进行初始化，那就要手动给它一个初始值，或者设置它为可选属性
    run() {
    }

    private pri() {
    }

    //私有成员只能在类的本身被调用，不能被类的实例调用，也不能被子类调用
    protected pro() {
    }

    //受保护成员只能在类或者子类中访问，而不能在类的实例中访问

    readonly legs: number = 4;
    //只读属性，不能被更改
    //只读属性，一定要被初始化(实例属性一样要初始化，如this.name = name)

    static food: string = 'bones'

    sleep() {
        console.log('dog sleep')
    }

    //类的静态成员，只能通过类名进行调用，而不能通过实例进行调用
}

console.log(Dog.prototype)
//只有constructor和run方法

console.log(Dog.food)

// console.log(dog.food)

let dog = new Dog("wangwang")
console.log(dog)
//内部属性只在实例上，而不在原型上

//dog.pri()
// dog.pro();

dog.eat();
dog.sleep();

//类的继承
class Husky extends Dog {
    constructor(name: string, public color: string) {
        //子类的构造函数，必须包含super调用,super代表父类的实例

        super(name);
        this.color = color
        //注意：this一定要在super调用之后再调用
        // this.pri()
        this.pro();
    }

    // color:string
    //给public前面加上public,则这个属性就变成了实例属性，color:string这行代码就可以注释掉了，代码户籍更简洁
}

//类的成员修饰符(默认public)

//类的静态成员可以被继承
console.log(Husky.food, '类的静态成员可以被继承')

//抽象类中的多态
class Cat extends Animal {
    sleep() {
        console.log('cat sleet')
    }
}

let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach(item=>{
    item.sleep();
})

//类的this类型，实现链式调用
class WorkFlow{
    step1(){
        return this;
    }

    step2(){
        return this;
    }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow{
    next(){
        return this;
    }
}

new MyFlow().next().step1().next().step2();
//这个可以保证父类和子类之间接口调用的连贯性

