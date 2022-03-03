//1.函数声明：可以
foo();
function foo() {
    console.log(a); // undefined
    var a = 2;
}

//2.函数表达式——报错
// foo(); // 不是 ReferenceError, 而是 TypeError!
// var foo = function bar() {
//     console.log('333');
// };


/**
 * 这段程序中的变量标识符 foo() 被提升并分配给所在作用域（在这里是全局作用域），因此
foo() 不会导致 ReferenceError 。但是 foo 此时并没有赋值（如果它是一个函数声明而不
是函数表达式，那么就会赋值）。 foo() 由于对 undefined 值进行函数调用而导致非法操作，
因此抛出 TypeError 异常。
 */

/**
 * foo 函数的声明（这个例子还包括实际函数的隐含值）被提升了，因此第一行中的调用可
以正常执行。
另外值得注意的是，每个作用域都会进行提升操作。尽管前面大部分的代码片段已经简化
了（因为它们只包含全局作用域），而我们正在讨论的 foo(..) 函数自身也会在内部对 var
a 进行提升（显然并不是提升到了整个程序的最上方）。因此这段代码实际上会被理解为下
面的形式：
function foo() {
var a;
console.log( a ); // undefined
a = 2;
}
foo();
 */

/**
 * 可以看到，函数声明会被提升，但是函数表达式却不会被提升。
foo(); // 不是 ReferenceError, 而是 TypeError!
var foo = function bar() {
// ...
};
 * 
*/