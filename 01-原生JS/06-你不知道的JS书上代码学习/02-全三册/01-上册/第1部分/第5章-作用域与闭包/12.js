/**
 * @Author liming
 * @Date 2024/5/20 14:37
 **/

/**
 *
 * @type {{get: (function(*): *), define: define}}
 * 这段代码实现了一个简单的模块管理器 `MyModules`，用于定义和获取模块。具体来说，它模拟了类似 CommonJS 的模块系统，但不完全相同，因为它并没有实现异步加载或错误处理。以下是代码的详细解释：
 *
 * 1. **模块管理器定义**：
 *
 *
 *    * 使用自执行函数（也称为 IIFE，Immediately Invoked Function Expression）来创建一个作用域，以防止全局命名空间被污染。
 *    * 在这个作用域内，定义了一个对象 `modules`，用于存储所有已定义的模块。
 *    * 提供了两个方法：`define` 和 `get`。
 *        + `define` 方法接受三个参数：模块名 `name`、依赖数组 `deps` 和实现函数 `impl`。它首先解析所有依赖，然后调用实现函数并将解析后的依赖作为参数传递给它。最后，将返回的对象存储在 `modules` 对象中，以便以后通过 `name` 检索。
 *        + `get` 方法接受一个参数：模块名 `name`。它返回存储在 `modules` 对象中的对应模块。
 * 2. **模块定义**：
 *
 *
 *    * 使用 `MyModules.define` 方法定义了两个模块：`bar` 和 `foo`。
 *        + `bar` 模块没有依赖，并定义了一个 `hello` 函数，该函数接受一个参数并返回一个字符串。
 *        + `foo` 模块依赖于 `bar` 模块，并定义了一个 `awesome` 函数。这个函数在控制台打印出 `bar.hello` 函数的结果（经过大写转换）。
 * 3. **模块获取和调用**：
 *
 *
 *    * 使用 `MyModules.get` 方法获取 `bar` 和 `foo` 模块，并将它们分别存储在 `bar` 和 `foo` 变量中。
 *    * 直接调用 `bar.hello` 函数并打印结果。
 *    * 调用 `foo.awesome` 函数，该函数会调用 `bar.hello` 函数并打印结果（经过大写转换）。
 *
 * **输出**：
 *
 *
 * ```bash
 * Let me introduce: hippo
 * LET ME INTRODUCE: HIPPO
 * ```
 * 注意：尽管代码中的日期是 `2024/5/20`（未来的日期），但代码本身是有效的，并可以在任何现代JavaScript环境中运行。
 */
var MyModules = (function Manager() {
    var modules = {};
    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();

MyModules.define( "bar", [], function() {
    function hello(who) {
        return "Let me introduce: " + who;
    }
    return {
        hello: hello
    };
} );
MyModules.define( "foo", ["bar"], function(bar) {
    var hungry = "hippo1111";
    function awesome() {
        console.log( bar.hello( hungry ).toUpperCase() );
    }
    return {
        awesome: awesome
    };
} );
var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );
console.log(bar.hello( "hippo" )); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO


