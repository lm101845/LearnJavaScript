/**
 * @Author liming
 * @Date 2024/4/23 11:05
 **/

function foo(a) {
    var b = a * 2;
    function bar(c) {
        console.log( a, b, c );
    }
    bar( b * 3 );
}
foo( 2 ); // 2, 4, 12