/**
 * @Author liming
 * @Date 2024/5/31 10:23
 **/

function foo(wrapper) {
    wrapper.a = 42;
}
var obj = {
    a: 2
};
foo( obj );
console.log(obj.a); // 42

/**
 * 这里 obj 是一个封装了标量基本类型值 a 的封装对象。 obj 引用的一个复本作为参数
 * wrapper 被传递到 foo(..) 中。这样我们就可以通过 wrapper 来访问该对象并更改它的属
 * 性。函数执行结束后 obj.a 将变成 42 。
 */