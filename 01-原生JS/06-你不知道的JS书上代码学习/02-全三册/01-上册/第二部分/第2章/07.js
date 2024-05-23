/**
 * @Author liming
 * @Date 2024/5/23 8:55
 **/
function foo() {
    console.log( this.a );
}
function doFoo(fn) {
// fn 其实引用的是 foo
    fn(); // <-- 调用位置！
}
var obj = {
    a: 2,
    foo: foo
};
var a = "oops, global"; // a 是全局对象的属性
doFoo( obj.foo ); // "oops, global"

//参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，所以结果和上一
// 个例子一样。