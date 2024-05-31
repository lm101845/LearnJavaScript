/**
 * @Author liming
 * @Date 2024/5/31 9:19
 **/

/**
 * 字符串经常被当成字符数组。字符串的内部实现究竟有没有使用数组并不好说，但
 * JavaScript 中的字符串和字符数组并不是一回事，最多只是看上去相似而已。
 */

var a = "foo";
var b = ["f","o","o"];

/**
 * JavaScript 中字符串是不可变的，而数组是可变的。并且 a[1] 在 JavaScript 中并非总是合
 * 法语法，在老版本的 IE 中就不被允许（现在可以了）。正确的方法应该是 a.charAt(1) 。
 *
 * 字符串不可变是指字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符
 * 串。而数组的成员函数都是在其原始值上进行操作。
 */

c = a.toUpperCase();
a === c; // false
a; // "foo"
c; // "FOO"
b.push( "!" );
b; // ["f","O","o","!"]


/**
 * 许多数组函数用来处理字符串很方便。虽然字符串没有这些函数，但可以通过“借用”数
 * 组的非变更方法来处理字符串：
 */
a.join; // undefined
a.map; // undefined
var c = Array.prototype.join.call( a, "-" );
var d = Array.prototype.map.call( a, function(v){
    return v.toUpperCase() + ".";
} ).join( "" );
c; // "f-o-o"
d; // "F.O.O."