/*
 * @Author: liming
 * @Date: 2021-11-24 11:00:58
 * @LastEditTime: 2021-11-24 12:00:24
 * @FilePath: \02-手册指南\01-基础类型.ts
 */
var isDone = false;
var decLiteral = 6;
var name1 = "bob";
name1 = "smith";
// 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
var list = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
var list2 = [1, 2, 3];
var x;
x = ["hello", 10];
// x= [10,'hello']; //报错
// 枚举
// enum Color{ Red, Green, Blue }
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 0] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[5];
console.log(colorName);
// never类型
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) { }
}
function fn5() {
    // never表示永远不会返回结果
    // 和void的区别：
    // 从哲学的角度上来讲，你没有返回值(返回值为空)，一定意义上也是一种返回值
    // 而never是真的没有，连空都没有，什么都没有
    // 在JS里面有一些函数，它不返回结果，连undefined都不返回
    // 它是用来报错的
    // 当程序运行出错误了，需要报一个错，就可以用这种函数来完成报错
    throw new Error("报错了！");
    // 这个函数一旦调用，它就会报错
    // 不过这种一般用的比较少
}
// Object类型
// 当 TypeScript 不确定一个实体具有哪些属性时，就可以用 object类型
// 类型断言
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性
// 只要是共有的属性，就可以在程序运行时刻被访问到
// 类型断言有两种形式。 其一是“尖括号”语法：
var someValue = 'this is a string';
var strLength = someValue.length;
//另一个为as语法：
var someValue2 = 'this is a string';
var strLength2 = someValue.length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
