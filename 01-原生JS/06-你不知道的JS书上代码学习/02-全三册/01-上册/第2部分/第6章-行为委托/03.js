/**
 * @Author liming
 * @Date 2024/5/29 8:32
 **/
var Foo = {};
var a1 = Object.create( Foo );
console.log(a1); // Object {}
Object.defineProperty( Foo, "constructor", {
    enumerable: false,
    value: function Gotcha(){}
});
console.log(a1); // Gotcha {}