/**
 * @Author liming
 * @Date 2024/5/23 8:47
 **/

function foo() {
    console.log( this.a );
}
//对象属性引用链中只有最顶层或者说最后一层会影响调用位置
var obj2 = {
    a: 42,
    foo: foo
};
var obj1 = {
    a: 2,
    obj2: obj2
};
obj1.obj2.foo(); // 42
//先从obj2开始找，找不到就undefined