/**
 * @Author liming
 * @Date 2024/5/23 9:09
 **/
function foo() {
    console.log( this.a );
}
var obj = {
    a:2
};
foo.call( obj ); // 2