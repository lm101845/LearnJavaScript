/**
 * @Author liming
 * @Date 2024/5/28 15:06
 **/
function Foo() {
// ...
}
let a = new Foo();
console.log(Object.getPrototypeOf( a ) === Foo.prototype); // true
//Object.getPrototypeOf() 静态方法返回指定对象的原型（即内部 [[Prototype]] 属性的值）。

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);