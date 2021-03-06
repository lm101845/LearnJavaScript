/*
 * @Author: liming
 * @Date: 2021-09-02 09:52:40
 * @LastEditTime: 2021-09-02 09:53:51
 * @FilePath: \07-立即执行函数与闭包\01-闭包\09.js
 */

// 闭包（closure）指有权访问另一个函数作用域中变量的函数。
// 一个作用域可以访问另外一个函数的局部变量
// 我们fn 外面的作用域可以访问fn 内部的局部变量
// 闭包的主要作用: 延伸了变量的作用范围(本身这个变量只能在函数内使用，
// 但是闭包让别的函数也能用这个局部变量)
// num这个变量不能等fn执行完就销毁，因为还有别的函数调用它。只有等所有函数都调用完了，它才销毁

function fn() {
  var num = 10;
  // 写声明函数再返回，要2步，比较麻烦
  // function fun() {
  //   console.log(num); // }
  // return fun;
  //这样写更加简单，一步搞定：返回声明的函数
    return function () {
        console.log(num);
    }
}

fn()()  //10
