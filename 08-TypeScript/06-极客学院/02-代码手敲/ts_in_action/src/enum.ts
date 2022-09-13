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
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}

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
console.log(Role)
console.log(Role.Owner)

//2.字符串枚举——不可以进行反向映射，只有枚举成员的名字作为索引
enum Message {
    Success = "恭喜您，成功了",
    Fail = "抱歉，失败了"
}

//3.异构枚举——数字枚举和字符串枚举进行混用
//但这种情况容易引起混淆，所以不建议使用
enum Answer {
    N,
    Y = 'YES'
}

//枚举成员的性质
// Role.Reporter = 5;
//枚举成员的值不可更改，只读
//报错：Attempt to assign to const or readonly variable

//枚举成员的类型分为2类，一类是const mumber(常量枚举)，第二类是computed member(需要被计算的枚举成员)
//第二类成员，不会在编译阶段被计算，而是会保留到程序的执行阶段
enum Char {
    a,
    g,
    b = Char.a,
    c = 1 + 2,
    d = Math.random(),
    e = '123'.length,
    // f,
    //需要被计算的枚举成员后面一定要赋一个初始值，不然报错——常量枚举后面则不用
    //Enum member must have initializer.
}

console.log(Char)

//常量枚举——用const声明的枚举
//常量枚举的特性：在编译阶段被移除——编译后没有任何代码

const enum Month {
    Jan,
    Feb,
    Mar,
}

//作用：我们不需要对象，而只需要对象的值时，就可以用常量枚举
//它可以减少我们在编译环节的代码

let month = [Month.Jan, Month.Feb, Month.Mar]
//编译后：let month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */]
//这样代码会简介很多

//枚举类型
//在很多情况下，枚举和枚举成员都可以单独的作为一种类型存在
enum E {a, b}
//情况1：枚举成员没有初始值

enum F {a = 0, b = 1}
//情况2：枚举成员都是数字枚举

enum G {a = 'apple', b = 'banana'}
//情况3：枚举成员都是字符串枚举

let e: E = 3
let f: F = 3
//我们可以把任何的number类型赋值给枚举类型，它的取值也可以超出枚举成员的定义

// console.log(e === f)
//注意：2种不同类型的枚举是不可以进行比较的

let e1: E.a = 1
let e2: E.b
let e3: E.a = 1
//e1,e2不同枚举成员类型，不可以比较
// console.log(e1 === e2)

//e1,e3是相同的枚举成员类型，可以比较
console.log(e1 === e3)


let g1: G = G.b
let g2: G.a = G.a
//而字符串枚举的值，只能是它自身

