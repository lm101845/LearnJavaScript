"use strict";
/**
 * @Author liming
 * @Date 2022/9/13 17:48
 **/
//1.原始类型
let bool = true;
let num = 123;
let str = 'abc';
// str = 123;
// 变量的数据类型不可以改变，不可以赋值
//2.数组类型
//2种声明方式是等价的
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [1, 2, 'abc', 3];
//联合数据类型，数组的元素既可以是number类型，也可以是string类型
//3.元祖类型:特殊的数组，它限定了数组元素的类型和个数(类型要匹配，不能多，也不能少)
let tuple1 = [0, '1'];
// let tuple2:[number,string] = ['1',0]
// let tuple3:[number,string] = [0,'1',2]
//元祖的越界问题：数组有一个push方法，元祖也可以使用——实际开发过程中，强烈不建议这样使用
tuple1.push(2);
//这个方法不会报错！！
console.log(tuple1);
//[0, '1', 2]
//TS是允许我们往元祖中插入新的元素的，但是等我们具体访问，则会出错！！
console.log(tuple1[0]);
console.log(tuple1[1]);
// console.log(tuple1[2])   //报错！！
//4.函数类型
let add1 = (x, y) => x + y;
let add2 = (x, y) => x + y;
//TS具有类型推断功能，所以函数返回值的类型是可以省略的
//这里我们定义一个函数类型——冒号后面的就是类型！！
//这里compute就是函数类型，但是它没有具体的实现
let compute;
//我们这里来实现一下——等号后面就是实现！！
//在实现的过程中，函数参数的名称可以和定义的时候不一样，而且也不用指定具体的类型
compute = (a, b) => a + b;
//5.对象类型——对象类型是小写的,字符串类型string也是小写
//错误定义对象类型的方法：
// let obj:object = {x:1,y:2};
// obj.x = 3;
//TS中不允许这样操作，因为我们只是简单的定义了obj是object类型，并没有指定它包含了哪些属性
//正确定义对象类型的方法：
let obj = { x: 1, y: 2 };
obj.x = 3;
//这样才可以修改对象中某个属性的值，因为前面具体的说明了这个对象有哪些属性，这些属性有哪些类型
//6.symbol类型
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2); //false
//7.undefined和null类型
let un = undefined;
//如果被声明为了undefined，它们就不能被赋值给其他数据类型,null同理。
// un = 3;
//报错：Type '3' is not assignable to type 'undefined'.
let nu = null;
//反过来，其他变量可以被赋值给undefined和null吗？——也不行
num = undefined;
console.log(num);
//Type 'undefined' is not assignable to type 'number'.
// str = null
// console.log(str)
//Type 'null' is not assignable to type 'string'.
//TS官方文档中,【undefined和null是任何类型的子类型】，这说明它们可以被赋值给其他类型，不过我们需要做一些设置
//方法1：tsconfig.js中"strictNullChecks": false即可
//方法2：使用联合类型
//8.void类型——没有任何返回值的类型
//它可以让任何表达式返回undefined
//我们返回undefined最便捷的方法就是 void 0;\
//因为undefined在JS中不是保留字，我们甚至可以自己定义一个undefined来覆盖全局的undefined
//例如：
// (
//     function () {
//         var undefined = 100;
//         console.log(undefined)
//     }
// )()
//9.any类型——如果我们不指定变量的类型，它默认就是any,这和js就没有区别了
//所以，如果不是特殊情况，我们不建议使用any类型
let x;
x = 1;
x = [1, 2, 3];
x = () => { };
//10.never类型——表示永远不会有返回值的类型
//一个函数抛出一个异常，那这个函数永远不会有返回值
let error = () => {
    throw new Error('error');
};
//死循环函数，也是永远不会有返回值的
let endless = () => {
    while (true) {
    }
};
