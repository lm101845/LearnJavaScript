/**
 * @Author liming
 * @Date 2024/5/29 8:31
 **/
function Foo() {}
var a1 = new Foo();
Foo.prototype.constructor = function Gotcha(){};
console.log(a1.constructor); // Gotcha(){}
console.log(a1.constructor.name); // "Gotcha"
console.log(a1); // Foo {}