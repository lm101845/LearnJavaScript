"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author liming
 * @Date 2022/10/21 14:44
 * 交叉类型和联合类型
 **/
exports.default = {};
let pet = {
    run() {
    },
    jump() {
    }
};
//这个变量是这2个接口的交叉类型(从名称看是取类型的交集，其实是取所有类型的并集)
//这个变量将同时具备这2个接口的所有方法
//联合类型指的是声明的类型并不确定，可以是多个类型中的其中一个
let a = 'a';
//限定一个变量的取值在某一个特定的范围内
//字符串的字面量联合类型
let b;
//数字的字面量联合类型
let c;
//对象的联合类型
class Dog {
    run() { }
    eat() { }
}
class Cat {
    jump() { }
    eat() { }
}
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    let pet = master === Master.Boy ? new Dog() : new Cat();
    pet.eat();
    //pet是联合类型，类型未确认的情况下，只能访问联合类型的公有方法eat
    return pet;
}
//这个代码如果要新增shape,就会有问题，不灵活
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.radius ** 2;
        default:
            return ((e) => { throw new Error(e); })(s);
        //这个函数的作用：检查函数是不是never类型，如果是的话，说明你所有分支都被覆盖了，那这个分支永远不会走到
    }
}
console.log(area({ kind: 'circle', radius: 1 }));
