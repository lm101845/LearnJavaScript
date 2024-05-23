/**
 * @Author liming
 * @Date 2024/5/23 9:51
 **/
function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2