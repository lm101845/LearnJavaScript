/**
 * @Author liming
 * @Date 2024/5/31 9:09
 **/

/**
 * 许多数组函数用来处理字符串很方便。虽然字符串没有这些函数，但可以通过“借用”数
 * 组的非变更方法来处理字符串：
 */

var a = "foo";

a.join; // undefined
a.map; // undefined
var c = Array.prototype.join.call( a, "-" );
var d = Array.prototype.map.call( a, function(v){
    return v.toUpperCase() + ".";
} ).join( "" );
console.log(c); // "f-o-o"
console.log(d); // "F.O.O."