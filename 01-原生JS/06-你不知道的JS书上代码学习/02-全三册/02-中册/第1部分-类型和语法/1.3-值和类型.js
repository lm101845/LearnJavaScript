/**
 * @Author liming
 * @Date 2024/5/30 9:13
 **/

//JavaScript 中的变量是没有类型的，只有值才有。变量可以随时持有任何类型的值。

/**
 * 在对变量执行 typeof 操作时，得到的结果并不是该变量的类型，而是该变量持有的值的类
 * 型，因为 JavaScript 中的变量没有类型。
 */

var a = 42;
typeof a; // "number"
a = true;
typeof a; // "boolean"

console.log(typeof typeof 42)
//typeof 42 首先返回字符串 "number" ，然后 typeof "number" 返回 "string" 。