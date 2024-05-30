/**
 * @Author liming
 * @Date 2024/5/30 9:30
 **/

// 这样会抛出错误
if (DEBUG) {
    console.log("Debugging is starting");
}
// 这样是安全的
if (typeof DEBUG !== "undefined") {
    console.log("Debugging is starting");
}

console.log('==============')

/**
 * 还有一种不用通过 typeof 的安全防范机制的方法，就是检查所有全局变量是否是全局对象
 * 的属性，浏览器中的全局对象是 window 。所以前面的例子也可以这样来实现：
 */

if (window.DEBUG) {
// ..
}
if (!window.atob) {
// ..
}

/**
 * 与 undeclared 变量不同，访问不存在的对象属性（甚至是在全局对象 window 上）不会产生
 * ReferenceError 错误。
 * 一些开发人员不喜欢通过 window 来访问全局对象，尤其当代码需要运行在多种 JavaScript
 * 环境中时（不仅仅是浏览器，还有服务器端，如 node.js 等），因为此时全局对象并非总是
 * window 。
 */

// 一个立即执行函数表达式（IIFE，参见《你不知道的JavaScript （上卷）》 “作用域和闭包”
// 部分的3.3.2节）
(function () {
    function FeatureXYZ() { /*.. my XYZ feature ..*/
    }

// 包含doSomethingCool(..)
    function doSomethingCool() {
        var helper =
            (typeof FeatureXYZ !== "undefined") ?
                FeatureXYZ :
                function () { /*.. default feature ..*/
                };
        var val = helper();
// ..
    }

    doSomethingCool();
})();