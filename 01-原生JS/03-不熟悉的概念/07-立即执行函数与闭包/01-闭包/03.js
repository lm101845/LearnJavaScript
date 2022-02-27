/*
 * @Author: liming
 * @Date: 2021-09-02 08:42:10
 * @LastEditTime: 2021-09-02 08:43:21
 * @FilePath: \07-立即执行函数与闭包\03.js
 */
// 函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！
　function f1() {
     n = 999;
    //  console.log(n);
 }

f1();
// 这个函数必须要先执行一下
 console.log(n);