/**
 * @Author liming
 * @Date 2024/5/28 15:44
 **/

//isPrototypeOf() 与 instanceof 运算符不同。
// 在表达式 object instanceof AFunction 中，
// 会检查 object 的原型链是否与 AFunction.prototype 匹配，
// 而不是与 AFunction本身匹配。

function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar();

console.log(Foo.prototype.isPrototypeOf(bar));
// Expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));
// Expected output: true
