/**
 * 一个普通块内部的函数声明通常会被提升到所在作用域的顶部，这个过程不会像下面的代
码暗示的那样可以被条件判断所控制：
但是需要注意这个行为并不可靠，在 JavaScript 未来的版本中有可能发生改变，因此应该
尽可能避免在块内部声明函数
 */
foo(); // "b"
var a = true;
if (a) {
    function foo() { console.log("a"); }
}
else {
    function foo() { console.log("b"); }
}