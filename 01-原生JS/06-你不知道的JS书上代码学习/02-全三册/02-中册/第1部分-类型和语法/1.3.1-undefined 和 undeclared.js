/**
 * @Author liming
 * @Date 2024/5/30 9:21
 **/

/**
 * 大多数开发者倾向于将 undefined 等同于 undeclared（未声明），但在 JavaScript 中它们完全
 * 是两回事。
 *
 * 已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明
 * 过的变量，是 undeclared 的。
 */

var a;
console.log(a); // undefined
// console.log(b); // ReferenceError: b is not defined

/**
 * 浏览器对这类情况的处理很让人抓狂。上例中，“b is not defined”容易让人误以为是“b is
 * undefined”。这里再强调一遍，“undefined”和“is not defined”是两码事。此时如果浏览器
 * 报错成“b is not found”或者“b is not declared”会更准确。
 */

console.log('==================')

console.log(typeof a); // "undefined"
console.log(typeof b); // "undefined"

/**
 * 对于 undeclared（或者 not defined）变量， typeof 照样返回 "undefined" 。请注意虽然 b 是
 * 一个 undeclared 变量，但 typeof b 并没有报错。这是因为 typeof 有一个特殊的安全防范
 * 机制。
 * 此时 typeof 如果能返回 undeclared（而非 undefined）的话，情况会好很多。
 */