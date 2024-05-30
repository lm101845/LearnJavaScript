/**
 * @Author liming
 * @Date 2024/5/28 15:27
 **/
function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name;
};
var a = new Foo( "a" );
var b = new Foo( "b" );
console.log(a.myName()); // "a"
console.log(b.myName()); // "b"