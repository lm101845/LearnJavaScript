/*
 * @Author: liming
 * @Date: 2021-05-27 14:50:45
 * @LastEditTime: 2021-05-27 14:52:44
 * @FilePath: \LearnJavaScript\01-JS高程第4版代码\第5章-基本引用类型\5.3-原始值包装类型\5.3.3-String\11-字符串模式匹配方法.js
 */

// 最后一个与模式匹配相关的字符串方法是 split() 。这个方法会根据传入的分隔符将字符串拆分成
// 数组。作为分隔符的参数可以是字符串，也可以是 RegExp 对象。（字符串分隔符不会被这个方法当成
// 正则表达式。） 还可以传入第二个参数， 即数组大小， 确保返回的数组不会超过指定大小。
let colorText = "red,blue,green,yellow";
let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"]
let colors2 = colorText.split(",", 2); // ["red", "blue"]
let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""]

console.log(colors1);
console.log(colors2);
console.log(colors3);