/**
 * 注意， var foo 尽管出现在 function foo()... 的声明之前，但它是重复的声明（因此被忽
略了），因为函数声明会被提升到普通变量之前。
尽管重复的 var 声明会被忽略掉，但出现在后面的函数声明还是可以覆盖前面的。
 */

foo(); // 3
function foo() {
    console.log(1);
}
var foo = function () {
    console.log(2);
};
function foo() {
    console.log(3);
}

/**
 * 虽然这些听起来都是些无用的学院理论，但是它说明了在同一个作用域中进行重复定义是
非常糟糕的，而且经常会导致各种奇怪的问题。
 */