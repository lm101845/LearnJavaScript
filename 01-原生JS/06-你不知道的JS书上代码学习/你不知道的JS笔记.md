# 你不知道的JS笔记

# 问题

### 问题1

> 为什么三个都是2

~~~js
var a = 100
function foo() {
    console.log( this.a );
}
var obj = {
    a:2
};
var bar = function() {
    foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2
// 硬绑定的 bar 不可能再修改它的 this(已经用了一次call了)
bar.call( window ); // 2
~~~

在这个例子中，`foo.call(obj);` 通过 `call` 方法显式地将 `foo` 函数内部的 `this` 绑定到了 `obj` 对象。`call` 方法允许你调用一个函数，并为它指定一个 `this` 上下文和参数列表。在这个案例中，`this` 被硬编码（或者说“绑定”）到了 `obj`。

以下是代码的逐步分析：

1. `var a = 100;` 全局变量 `a` 被设置为 100。

2. `function foo() { console.log(this.a); }` 定义了一个函数 `foo`，它打印出当前 `this` 上下文中的 `a` 属性。

3. `var obj = { a: 2 };` 创建了一个对象 `obj`，它有一个属性 `a`，其值为 2。

4. `var bar = function() { foo.call(obj); };` 定义了一个函数 `bar`，它调用 `foo` 函数，并通过 `call` 方法将 `this` 上下文设置为 `obj`。

5. `bar();` 直接调用 `bar` 函数，输出 `obj` 对象中的 `a` 值，即 2。

6. `setTimeout(bar, 100);` 异步地在 100 毫秒后调用 `bar` 函数。尽管是异步调用，但 `bar` 函数内部的逻辑不会改变，它仍然会调用 `foo` 函数并将 `this` 设置为 `obj`，因此输出仍然是 2。

7. `bar.call(window);` 尝试通过 `call` 方法改变 `bar` 函数中的 `this` 上下文为全局对象（在浏览器环境中通常是 `window`）。然而，由于 `bar` 函数内部又通过 `foo.call(obj);` 硬编码了 `this` 上下文为 `obj`，这个尝试是无效的。无论外部如何改变 `bar` 的 `this`，`foo` 函数内部的 `this` 总是指向 `obj`。因此，输出仍然是 `obj` 中的 `a` 值，即 2。

所以，三个调用的输出都是 2，因为 `foo` 函数内部的 `this` 被硬编码绑定到了 `obj` 对象上，而这个对象的 `a` 属性值为 2。

### 问题2

~~~js
var curried = [].slice.call( arguments, 1 );含义
~~~

在JavaScript中，`[].slice.call(arguments, 1)` 这段代码执行了几个关键的操作，主要用于将一个类数组对象（如 `arguments` 对象）转换为一个真正的数组，并从第二个元素开始截取。下面分步解释这段代码：

1. **`arguments` 对象**：在JavaScript中，每个函数内部都有一个特殊的 `arguments` 对象，它是一个类数组对象，包含了传递给函数的所有参数。尽管 `arguments` 对象看起来和数组相似，但它并不是一个真正的数组，因此它没有数组的方法（如 `push`、`pop`、`slice` 等）。

2. **`[].slice` 方法**：`slice` 方法通常用于从一个数组中提取一部分元素并返回一个新数组。这里使用了一个空数组 `[]` 来获取 `slice` 方法的引用，而不是直接在某个特定数组上调用它。这种做法在JavaScript中很常见，用于从一个非数组对象（如 `arguments`）上借用数组的方法。

3. **`call` 方法**：`call` 是函数对象的一个方法，它允许你调用一个函数，同时指定该函数运行时 `this` 的值，并可以单独传递函数的参数。在这个上下文中，`call` 方法用于将 `slice` 方法的 `this` 上下文设置为 `arguments` 对象，并传递两个参数：`1` 和之后的省略号（表示 `arguments` 对象中的其他参数）。

4. **`[].slice.call(arguments, 1)` 的整体作用**：这段代码的整体作用是从 `arguments` 对象中创建一个新的数组，该数组从 `arguments` 的第二个元素开始（索引为1的元素），一直到最后一个元素。这样做通常是为了排除 `arguments` 中的第一个元素（可能是某种形式的配置对象或特定参数），而只关注后续的元素。

例如，在一个函数中，如果你想将除了第一个参数之外的所有参数转换为一个数组，你可以使用这种方法：

```javascript
function exampleFunction() {
    var firstArg = arguments[0]; // 第一个参数
    var curried = [].slice.call(arguments, 1); // 从第二个参数开始的数组
    // ... 函数的其他逻辑 ...
}
```

在这个例子中，`curried` 将是一个包含从第二个参数开始到最后一个参数的所有参数的数组。注意，在现代JavaScript（ES6+）中，你也可以使用扩展运算符（`...`）或 `Array.from` 方法来达到类似的效果。

### 问题3

> 下面代码含义

~~~js
function foo() {
    var arr = Array.prototype.slice.call( arguments );
    arr.push( "bam" );
    console.log( arr );
}
~~~

这段JavaScript代码定义了一个名为`foo`的函数。这个函数接收任意数量的参数，并将这些参数转换为一个数组。然后，它在数组的末尾添加一个字符串`"bam"`，并将最终的数组打印到控制台。

下面是这段代码的详细解释：

1. `function foo() {...}`：定义了一个名为`foo`的函数。

2. `var arr = Array.prototype.slice.call( arguments );`：`arguments`是一个特殊的对象，它包含了传递给函数的所有参数。`Array.prototype.slice.call( arguments )`是一种常见的技巧，用于将`arguments`对象转换为一个真正的数组。这样做的好处是，你可以在这个数组上使用诸如`push`、`pop`、`slice`等数组方法。

3. `arr.push( "bam" );`：在数组的末尾添加一个新元素`"bam"`。

4. `console.log( arr );`：将数组打印到控制台。

所以，如果你调用`foo("bar", "baz")`，这个函数会打印`["bar", "baz", "bam"]`到控制台。



