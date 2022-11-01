"use strict";
/**
 * @Author liming
 * @Date 2022/10/21 13:22
 **/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * X兼容Y: X(目标类型) = Y(源类型)
 *
 */
exports.default = {};
let s = 'a';
s = null;
//字符型是兼容null类型的,即null是字符型的子类型
console.log(s, 's');
let x = { a: 1, b: 2 };
let y = { a: 1, b: 2, c: 3 };
//问题：x,y是否可以相互赋值？
x = y; //可以(接口：多的可以赋值给少的,让少的变得多一些)
//y = x;  //不可以
console.log(x, 'x');
console.log(y, 'y');
//然后定义一个高阶函数
function hof(handler) {
    return handler;
}
//此时，Handler是目标类型，我们实际传入的参数是原类型
//1)参数个数：目标函数的参数个数(2个)一定要多于原函数的参数个数
let handler1 = (a) => {
};
hof(handler1);
let handle2 = (a, b, c) => {
};
// hof(handler2)
//不可以，目标函数有2个参数，而原函数有3个，不行！！
//可选参数和剩余参数
let a = (p1, p2) => {
};
let b = (p1, p2) => {
};
let c = (...args) => {
};
a = b;
a = c;
//原则1：固定参数可以兼容可选参数和剩余参数
b = c;
b = a;
//原则2：可选参数不兼容固定参数和剩余参数——可以通过tsconfig.json来配置("strictFunctionTypes": false)
c = a;
c = b;
//原则3：剩余参数可以兼容固定参数和可选参数
//2)参数类型
let handler3 = (a) => {
};
let p3d = (point) => {
    console.log(point);
};
let p2d = (point) => {
    console.log(point);
};
//这2个函数参数个数是相同的，都是一个，参数类型都是对象，只不过p3d参数对象多了一个属性
//成员个数多的兼容成员个数少的(少的可以给多的赋值，让多的变少)
p3d = p2d; //可以
// p2d = p3d;  //不行(也可以配置tsconfig.json)
//这种叫函数参数的双向协变
// 3) 返回值类型(目标函数的返回值类型必须与原函数类型相同或者为其子类型)
let f = () => ({ name: 'Alice' });
let g = () => ({ name: 'Alice', location: 'Beijing' });
f = g;
console.log(f, 'f');
function overload(a, b) { } //这个是具体实现函数
//function overload(a: any, b: any,c:any): any { }  //这个是具体实现函数,不兼容
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}
//列表中的函数叫目标函数，而具体实现就是源函数
//所以在重载列表中，目标函数参数要多于源函数参数
//枚举兼容性
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
})(Color || (Color = {}));
//枚举类型和数值类型是完全兼容的
let fruit = 3;
console.log(fruit, 'fruit');
let no = Fruit.Apple;
console.log(no, 'no');
// let color:Color.Red = Fruit.Apple;
//而枚举之间是完全不兼容的
//类兼容性(和接口比较相似，只比较结构)
//在比较类兼容的时候，静态成员和构造函数是不参与比较的
class A {
    constructor(p, q) {
        this.name = '';
        this.id = 1;
    }
}
class B {
    constructor(p) {
        this.name = '';
        this.id = 2;
    }
}
B.s = 1;
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb;
// bb = aa;
//2个实例完全兼容，因为他们都拥有同一个实例属性id，而构造函数和静态属性不比较
//而如果类中含有私有成员，则这2个类就不兼容了
//此时只有父类和子类之间是相互兼容的
class C extends A {
}
let cc = new C(1, 2);
aa = cc;
cc = aa;
let obj1 = {};
let obj2 = {};
obj1 = obj2;
//泛型函数
let log1 = (x) => {
    console.log('x');
    return x;
};
let log2 = (y) => {
    console.log('y');
    return y;
};
log1 = log2;
//如果2个泛型函数的定义相同，但是没有指定类型参数，他们也是兼容的
