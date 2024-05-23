/**
 * @Author liming
 * @Date 2024/5/23 8:45
 **/
function foo() {
    console.log( this.a );
}
var obj = {
    a: 20,
    // foo: foo
    foo
};
obj.foo(); // 2