/**
 * @Author liming
 * @Date 2023/9/18 21:26
 **/

export default {}

abstract class Base {
    abstract getName(): string

    //抽象方法，是让别人实现的

    printName() {
        console.log(this.getName())
    }
}

// const b = new Base()
// 报错：无法创建抽象类的实例，要用子类继承

class Derived extends Base {
    getName(): string {
        return "子类实现抽象方法";
    }
}

const b = new Derived();
console.log(b.getName())
b.printName()

console.log("====================")

// function greet(ctor:typeof Base){
//     // const instance = new ctor()
//     //报错：无法创建抽象类的实例(因为抽象类不能被实例化)
// }

function greet(ctor: new() => Base) {
    const instance = new ctor()
    instance.printName()
}

// greet(Base)
greet(Derived)
