/**
 * @Author liming
 * @Date 2024/5/23 9:10
 **/
var a = 100
function foo() {
    console.log( this.a );
}
var obj = {
    a:2
};
var bar = function() {
    foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2
// 硬绑定的 bar 不可能再修改它的 this
bar.call( window ); // 2