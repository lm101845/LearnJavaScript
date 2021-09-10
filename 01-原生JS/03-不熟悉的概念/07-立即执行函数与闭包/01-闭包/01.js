/*
 * @Author: liming
 * @Date: 2021-09-02 08:38:03
 * @LastEditTime: 2021-09-02 08:41:36
 * @FilePath: \07-立即执行函数与闭包\01.js
 */

// 闭包之函数内部可以直接读取全局变量
var n = 999;
// let n = 100;

function f1() {
  console.log(n);
}

f1(); // 999
