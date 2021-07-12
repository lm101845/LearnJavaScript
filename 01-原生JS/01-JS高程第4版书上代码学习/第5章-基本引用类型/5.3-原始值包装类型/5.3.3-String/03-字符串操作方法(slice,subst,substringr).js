/*
 * @Author: liming
 * @Date: 2021-05-27 14:30:48
 * @LastEditTime: 2021-05-27 14:48:56
 * @FilePath: \LearnJavaScript\01-JS高程第4版代码\第5章-基本引用类型\5.3-原始值包装类型\5.3.3-String\03-字符串操作方法.js
 */

//1.concat() ，用于将一个或多个字符串拼接成一个新字符串。
let stringValue = "hello ";
let result = stringValue.concat("world");
console.log(result); // "hello world"
console.log(stringValue); // "hello"

// 在这个例子中，对 stringValue 调用 concat() 方法的结果是得到 "hello world" ，但
// stringValue 的值保持不变。 concat() 方法可以接收任意多个参数， 因此可以一次性拼接多个字符串，
// 如下所示：
let result1 = stringValue.concat("world", "!");
console.log(result1); // "hello world!"
console.log(stringValue); // "hello"

// 这个修改后的例子将字符串 "world" 和 "!" 追加到了 "hello " 后面。虽然 concat() 方法可以拼接
// 字符串， 但更常用的方式是使用加号操作符（ + ）。而且多数情况下， 对于拼接多个字符串来说， 使用加
// 号更方便。


// 2.slice()、 substr() 和 substring()
// ECMAScript提供了 3 个从字符串中提取子字符串的方法： slice()、 substr() 和 substring()。 这
// 3 个方法都返回调用它们的字符串的一个子字符串， 而且都接收一或两个参数。 第一个参数表示子字符串开
// 始的位置， 第二个参数表示子字符串结束的位置。 

// 对 slice() 和 substring() 而言， 第二个参数是提取结束的位置（ 即该位置之前的字符会被提取出来）。
// 对 substr() 而言， 第二个参数表示返回的子字符串数量。

// 任何情况下， 省略第二个参数都意味着提取到字符串末尾。

// 与 concat() 方法一样， slice() 、 substr()
// 和 substring() 也不会修改调用它们的字符串， 而只会返回提取到的原始新字符串值。
let stringValue1 = "hello world";
console.log(stringValue1.slice(3)); //"lo world"
console.log(stringValue1.substring(3)); //"lo world"
console.log(stringValue1.substr(3));

console.log(stringValue1.slice(3, 7)); // "lo w" (包头不包尾)
console.log(stringValue1.substring(3, 7)); // "lo w" (包头不包尾)
console.log(stringValue1.substr(3, 7)); //"lo world"

// 在这个例子中， slice()、 substr() 和 substring() 是以相同方式被调用的， 而且多数情况下返
// 回的值也相同。 如果只传一个参数 3， 则所有方法都将返回 "lo world"，因为 "hello"中 "l"位置为 3。
// 如果传入两个参数 3 和 7， 则 slice() 和 substring() 返回 "lo w"（
// 因为 "world"中 "o"在位置 7，不包含）， 而 substr() 返回 "lo worl"，因为第二个参数对它而言表示返回的字符数。


// 当某个参数是负值时，这 3 个方法的行为又有不同。比如， slice() 方法将所有负值参数都当成字符串长度加上负参数值。
// 而 substr() 方法将第一个负参数值当成字符串长度加上该值， 将第二个负参数值转换为 0。
// substring() 方法会将所有负参数值都转换为 0。 看下面的例子：
console.log(stringValue1.slice(-3)); //-3+11 = 8,等价于slice(8)  // "rld"
console.log(stringValue1.substring(-3)) //等价于substring(0)  // "hello world"
console.log(stringValue1.substr(-3)); //-3+11 = 8,等价于substr(8)   // "rld"
console.log(stringValue1.slice(3, -4)) //等价于slice(3,7)    // "lo w"
console.log(stringValue1.substring(3,-4))  //等价于substring(3,0) ,又等价于substring(0,3)
console.log(stringValue1.substr(3, -4)) // 等价于substr(3,0)  "" (empty string)

// 这个例子明确演示了 3 个方法的差异。 在给 slice() 和 substr() 传入负参数时， 它们的返回结果
// 相同。 这是因为 - 3 会被转换为 8（ 长度加上负参数）， 实际上调用的是 slice(8) 和 substr(8)。 而
// substring() 方法返回整个字符串， 因为 - 3 会转换为 0。
// 在第二个参数是负值时， 这 3 个方法各不相同。 slice() 方法将第二个参数转换为 7， 实际上相当
// 于调用 slice(3, 7)， 因此返回 "lo w"。
// 而 substring() 方法会将第二个参数转换为 0， 相当于调用
// substring(3, 0)， 等价于 substring(0, 3)， 这是因为这个方法会将较小的参数作为起点， 将较
// 大的参数作为终点。 对 substr() 来说， 第二个参数会被转换为 0， 意味着返回的字符串包含零个字符，
// 因而会返回一个空字符串。