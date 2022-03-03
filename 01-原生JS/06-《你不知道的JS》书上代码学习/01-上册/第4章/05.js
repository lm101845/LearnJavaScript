foo(); // 1
var foo;
function foo() {
    console.log(1);
}
foo = function () {
    console.log(2);
};

/***
 * 会输出 1 而不是 2 ！这个代码片段会被引擎理解为如下形式：
function foo() {
console.log( 1 );
}
foo(); // 1
foo = function() {
console.log( 2 );
};
 */