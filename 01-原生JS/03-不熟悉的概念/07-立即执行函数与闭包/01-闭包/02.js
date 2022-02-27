/*
 * @Author: liming
 * @Date: 2021-09-02 08:39:45
 * @LastEditTime: 2021-09-02 08:41:58
 * @FilePath: \07-立即执行函数与闭包\02.js
 */

// 闭包之在函数外部自然无法读取函数内的局部变量

function fn1() {
    var n = 999;
    // let n = 100
}

console.log(n);  //ReferenceError: n is not defined