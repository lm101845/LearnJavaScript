/*
 * @Author: liming
 * @Date: 2021-07-13 21:58:28
 * @LastEditTime: 2021-07-13 22:17:14
 * @FilePath: \02-阮一峰ES6标准入门书上代码学习\第3章-变量的解构赋值\3.2-对象的解构赋值\01-基本用法.js
 */
let { foo, bar } = {
  foo: "aaa",
  bar: "bbb",
};

console.log(foo);
console.log(bar);
foo; // "aaa"
bar; // "bbb"

let person = {name: "yimi ",age: 20};
let { name, age } = person;

console.log(name); // 'zhangsan'
console.log(age); // 20

let { name: myName, age: myAge } = person; // myName myAge 属于别名
console.log(myName); // 'zhangsan'
console.log(myAge); // 20
