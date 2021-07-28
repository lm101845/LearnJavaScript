/*
 * @Author: liming
 * @Date: 2021-07-28 20:29:05
 * @LastEditTime: 2021-07-28 20:47:26
 * @FilePath: \01-模块化\02-代码手敲\01-modular\03-IIFE模式\module3.js
 */
//IIFE模式：匿名函数自调用
(function (window) {
    let msg = 'module3'
    function foo() {
        console.log('foo',msg);
    }
    window.module3 = {
        // foo: foo
        foo
        //这个是简写形式，同名的属性可以省略不写
    }
    // 我相当于给全局window添加了一个属性module3,这个属性是一个对象，对象上有一个方法叫foo
})(window)