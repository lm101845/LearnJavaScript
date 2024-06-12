/**
 * @Author liming
 * @Date 2024/6/6 8:22
 **/

var a = [1,2];
var b = [3,4];
console.log(a + b); // "1,23,4"

//a 和 b 都不是字符串，但是它们都被强制转换为字符串然后进行拼接。原因何在

console.log( [] + {})
console.log( {} + [])