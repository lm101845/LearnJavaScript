"use strict";
/**
 * @Author liming
 * @Date 2022/9/13 18:29
 **/
//枚举类型主要分为数字枚举和字符串枚举，用于解决下面这种问题：
/**
 * function initByRole(role){
 *     if(role === 1 || role === 2){
 *         //do sth
 *     }else if(role === 3 || role === 4){
 *         //do sth
 *     }else if(role === 5 || role === 6){
 *         //do sth
 *     }else{
 *         //do sth
 *     }
 * }
 */
//1.数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
/**
 * 枚举的实现原理：反向映射
 * "use strict";
 * var Role;
 * (function (Role) {
 *     Role[Role["Reporter"] = 0] = "Reporter";
 *     Role[Role["Developer"] = 1] = "Developer";
 *     Role[Role["Maintainer"] = 2] = "Maintainer";
 *     Role[Role["Owner"] = 3] = "Owner";
 *     Role[Role["Guest"] = 4] = "Guest";
 * })(Role || (Role = {}));
 */
//枚举非常像对象，我们打印一下看一下
//除了正常枚举成员之外，它还多了其他成员：我们既可以用枚举成员的名字来索引，也可以用值来索引
console.log(Role);
console.log(Role.Owner);
//2.字符串枚举——不可以进行反向映射，只有枚举成员的名字作为索引
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u60A8\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
//3.异构枚举——数字枚举和字符串枚举进行混用
//但这种情况容易引起混淆，所以不建议使用
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "YES";
})(Answer || (Answer = {}));
//枚举成员的性质
// Role.Reporter = 5;
//枚举成员的值不可更改，只读
//报错：Attempt to assign to const or readonly variable
//枚举成员的类型分为2类，一类是const mumber(常量枚举)，第二类是computed member(需要被计算的枚举成员)
//第二类成员，不会在编译阶段被计算，而是会保留到程序的执行阶段
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["g"] = 1] = "g";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 3] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    // f,
    //需要被计算的枚举成员后面一定要赋一个初始值，不然报错——常量枚举后面则不用
    //Enum member must have initializer.
})(Char || (Char = {}));
console.log(Char);
//作用：我们不需要对象，而只需要对象的值时，就可以用常量枚举
//它可以减少我们在编译环节的代码
let month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */];
//编译后：let month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */]
//这样代码会简介很多
//枚举类型
//在很多情况下，枚举和枚举成员都可以单独的作为一种类型存在
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
//情况1：枚举成员没有初始值
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
//情况2：枚举成员都是数字枚举
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
//情况3：枚举成员都是字符串枚举
let e = 3;
let f = 3;
//我们可以把任何的number类型赋值给枚举类型，它的取值也可以超出枚举成员的定义
// console.log(e === f)
//注意：2种不同类型的枚举是不可以进行比较的
let e1 = 1;
let e2;
let e3 = 1;
//e1,e2不同枚举成员类型，不可以比较
// console.log(e1 === e2)
//e1,e3是相同的枚举成员类型，可以比较
console.log(e1 === e3);
let g1 = G.b;
let g2 = G.a;
//而字符串枚举的值，只能是它自身
