/**
 * @Author liming
 * @Date 2024/5/20 14:10
 **/
function foo() {
    var a = 2;
    function baz() {
        console.log( a ); // 2
    }
    bar( baz );
}
function bar(fn) {
    fn(); // 妈妈快看呀，这就是闭包！
}

