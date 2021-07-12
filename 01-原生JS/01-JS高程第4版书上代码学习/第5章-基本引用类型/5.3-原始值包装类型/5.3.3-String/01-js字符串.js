/*
 * @Author: liming
 * @Date: 2021-05-27 13:36:07
 * @LastEditTime: 2021-05-27 14:28:55
 * @FilePath: \LearnJavaScript\01-JS高程第4版代码\第5章-基本引用类型\5.3-原始值包装类型\5.3.3-String\01-js字符串.js
 */

// JavaScript 字符串由 16 位码元（code unit）组成。对多数字符来说，每 16 位码元对应一个字符。换
// 句话说， 字符串的 length 属性表示字符串包含多少 16 位码元：
let message = "abcde";
console.log(message.length); // 5

// 此外， charAt() 方法返回给定索引位置的字符，由传给方法的整数参数指定。具体来说，这个方
// 法查找指定索引位置的 16 位码元， 并返回该码元对应的字符：
console.log(message.charAt(0));

// 使用 charCodeAt() 方法可以查看指定码元的字符编码。这个方法返回指定索引位置的码元值，索
// 引以整数指定。 比如：
console.log(message.charCodeAt(0));

// fromCharCode() 方法用于根据给定的 UTF-16 码元创建字符串中的字符。这个方法可以接受任意
// 多个数值， 并返回将所有数值对应的字符拼接起来的字符串：
// Unicode "Latin small letter A"的编码是 U+0061
// Unicode "Latin small letter B"的编码是 U+0062
// Unicode "Latin small letter C"的编码是 U+0063
// Unicode "Latin small letter D"的编码是 U+0064
// Unicode "Latin small letter E"的编码是 U+0065
console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // "abcde"
// 0x0061 === 97
// 0x0062 === 98
// 0x0063 === 99
// 0x0064 === 100
// 0x0065 === 101
console.log(String.fromCharCode(97, 98, 99, 100, 101)); // "abcde"