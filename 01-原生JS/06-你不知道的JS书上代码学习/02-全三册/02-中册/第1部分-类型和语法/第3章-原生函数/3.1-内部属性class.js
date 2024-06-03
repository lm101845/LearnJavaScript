/**
 * @Author liming
 * @Date 2024/6/3 8:40
 **/

console.log(Object.prototype.toString.call( [1,2,3] ))
// "[object Array]"
console.log(Object.prototype.toString.call( /regex-literal/i ))
// "[object RegExp]"

console.log(Object.prototype.toString.call( null ))
// "[object Null]"
console.log(Object.prototype.toString.call( undefined ))
// "[object Undefined]"


Object.prototype.toString.call( "abc" );
// "[object String]"
Object.prototype.toString.call( 42 );
// "[object Number]"
Object.prototype.toString.call( true );
// "[object Boolean]"