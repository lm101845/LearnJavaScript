/*
 * @Author: liming
 * @Date: 2021-07-28 20:29:05
 * @LastEditTime: 2021-07-28 20:31:58
 * @FilePath: \01-模块化\02-代码手敲\01-modular\01-全局function模式\module1.js
 */
// 全局函数模式：将不同的功能封装为不同的函数

let msg = 'module1'
function foo() {
    console.log('foo',msg);
}

function bar() {
    console.log('bar',msg)
}