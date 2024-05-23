/**
 * @Author liming
 * @Date 2024/5/23 9:44
 **/

/**
 * 第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供了一
 * 个可选的参数，通常被称为“上下文”（context），其作用和 bind(..) 一样，确保你的回调
 * 函数使用指定的 this 。
 */
function foo(el) {
    console.log( el, this.id );
}
var obj = {
    id: "awesome"
};
// 调用 foo(..) 时把 this 绑定到 obj
[1, 2, 3].forEach( foo, obj );
// 1 awesome 2 awesome 3 awesome