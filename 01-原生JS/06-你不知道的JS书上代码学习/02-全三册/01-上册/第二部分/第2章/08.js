/**
 * @Author liming
 * @Date 2024/5/23 8:59
 **/
function foo() {
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
var a = "oops, global"; // a 是全局对象的属性
setTimeout( obj.foo, 100 ); // "oops, global"

// JavaScript 环境中内置的 setTimeout() 函数实现和下面的伪代码类似：
// function setTimeout(fn,delay) {
// // 等待 delay 毫秒
//     fn(); // <-- 调用位置！
// }