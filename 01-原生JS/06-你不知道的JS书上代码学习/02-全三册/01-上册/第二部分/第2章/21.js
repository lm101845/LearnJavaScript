/**
 * @Author liming
 * @Date 2024/5/23 10:11
 **/
function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}
// 我们的 DMZ 空对象
var ø = Object.create( null );
// 把数组展开成参数
foo.apply( ø, [2, 3] ); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind( ø, 2 );
bar( 300 ); // a:2, b:3
bar( 300,400 ); // a:2, b:3