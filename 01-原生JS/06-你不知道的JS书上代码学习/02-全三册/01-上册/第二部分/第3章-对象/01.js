/**
 * @Author liming
 * @Date 2024/5/24 10:11
 **/
function foo() {
    console.log( "foo" );
}
var someFoo = foo; // 对 foo 的变量引用
var myObject = {
    apple: foo
};
foo(); // function foo(){..}
someFoo(); // function foo(){..}
myObject.apple(); // function foo(){..}