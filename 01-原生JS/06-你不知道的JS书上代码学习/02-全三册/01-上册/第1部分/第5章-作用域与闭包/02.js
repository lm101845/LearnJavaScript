/**
 * @Author liming
 * @Date 2024/5/20 14:06
 **/

function foo() {
    var a = 20;
    function bar() {
        console.log( a );
    }
    return bar;
}
var baz = foo();
baz(); // 2 —— 朋友，这就是闭包的效果。