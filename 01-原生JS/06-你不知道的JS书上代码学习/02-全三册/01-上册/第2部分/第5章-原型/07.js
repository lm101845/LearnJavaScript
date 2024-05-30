/**
 * @Author liming
 * @Date 2024/5/28 15:29
 **/
function Foo() { /* .. */ }
Foo.prototype = { /* .. */ }; // 创建一个新原型对象,此时重写了protorype，constructor丢失
var a1 = new Foo();
console.log(a1.constructor === Foo); // false!
console.log(a1.constructor === Object); // true!

Object.defineProperty( Foo.prototype, "constructor" , {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo // 让 .constructor 指向 Foo
} );
console.log(a1.constructor === Foo); // true!
console.log(a1.constructor === Object); // true!