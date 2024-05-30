/**
 * @Author liming
 * @Date 2024/5/23 10:22
 **/
function foo() {
// 返回一个箭头函数
    return (a) => {
        //this 继承自 foo()
        console.log(this.a);
    };
}

var obj1 = {
    a: 2
};
var obj2 = {
    a: 3
};
var bar = foo.call(obj1);
bar.call(obj2); // 2, 不是 3 ！
//foo() 内部创建的箭头函数会捕获调用时 foo() 的 this 。由于 foo() 的 this 绑定到 obj1 ，
// bar （引用箭头函数）的 this 也会绑定到 obj1 ，箭头函数的绑定无法被修改。（ new 也不
// 行！）