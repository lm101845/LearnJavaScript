/**
 * @Author liming
 * @Date 2024/5/23 10:15
 **/
function foo() {
    setTimeout(() => {
// 这里的 this 在此法上继承自 foo()
        console.log( this.a );
    },100);
}
var obj = {
    a:2
};
foo.call( obj ); // 2