/*
 * @Author: liming
 * @Date: 2021-07-28 20:29:05
 * @LastEditTime: 2021-07-28 20:56:26
 * @FilePath: \01-模块化\02-代码手敲\01-module\04-IIFE模式增强\module4.js
 */
//IIFE模式增强：引入依赖
//这就是现代模式实现的基石
(function (window,$) {
    // $是形参
    let msg = 'module4'
    function foo() {
        console.log('foo',msg);
    }
    window.module4 = foo
    //现在在全局是可以看到$符号的，因为html里面引入了jquery
    $('body').css('background','red')
})(window, jQuery)
// jQuery是实参