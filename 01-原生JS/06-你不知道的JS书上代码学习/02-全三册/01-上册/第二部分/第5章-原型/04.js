/**
 * @Author liming
 * @Date 2024/5/28 15:21
 **/
function Foo() {
// ...
}

console.log(Foo.prototype.constructor === Foo); // true
var a = new Foo();
console.log(a.constructor === Foo); // true
console.log(a.__proto__.constructor === Foo); // true