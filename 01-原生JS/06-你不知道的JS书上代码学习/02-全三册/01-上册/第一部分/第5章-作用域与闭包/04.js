/**
 * @Author liming
 * @Date 2024/5/20 14:12
 **/
var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log( a );
    }
    fn = baz; // 将 baz 分配给全局变量
}
function bar() {
    fn(); // 妈妈快看呀，这就是闭包！
}
foo();
bar(); // 2