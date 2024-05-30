/**
 * @Author liming
 * @Date 2024/5/23 8:49
 **/

function foo() {
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo; // 函数别名！
// 虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的
// bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"