/**
 * @Author liming
 * @Date 2024/5/20 14:00
 **/

function foo() {
    var a = 2;
    function bar() {
        console.log( a ); // 2
    }
    bar();
}
foo();