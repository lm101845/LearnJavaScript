/**
 * @Author liming
 * @Date 2024/5/23 10:06
 **/
function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}
// 把数组“展开”成参数
foo.apply( null, [2, 3] ); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind( null, 28 );
bar( 3 ); // a:28, b:3