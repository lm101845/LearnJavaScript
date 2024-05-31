/**
 * @Author liming
 * @Date 2024/5/31 9:16
 **/

//类数组
/**有时需要将类数组（一组通过数字索引的值）转换为真正的数组，这一般通过数组工具函
 * 数（如 indexOf(..) 、 concat(..) 、 forEach(..) 等）来实现。
 * 例如，一些 DOM 查询操作会返回 DOM 元素列表，它们并非真正意义上的数组，但十分
 * 类似。另一个例子是通过 arguments 对象（类数组）将函数的参数当作列表来访问（从
 * ES6 开始已废止）。
 * 工具函数 slice(..) 经常被用于这类转换：
 */

function foo() {
    var arr = Array.prototype.slice.call( arguments );
    arr.push( "bam" );
    console.log( arr );
}
foo( "bar", "baz" ); // ["bar","baz","bam"]

//如上所示， slice() 返回参数列表（上例中是一个类数组）的一个数组复本。
