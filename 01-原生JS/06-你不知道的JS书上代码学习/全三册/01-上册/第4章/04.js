/***
 * 同时也要记住，即使是具名的函数表达式，名称标识符在赋值之前也无法在所在作用域中使用
 */

foo(); // TypeError
bar(); // ReferenceError
var foo = function bar() {
    console.log('1');
}

/**
 * 这个代码片段经过提升后，实际上会被理解为以下形式：
var foo;
foo(); // TypeError
bar(); // ReferenceError
foo = function() {
var bar = ...self...
// ...
}
 */