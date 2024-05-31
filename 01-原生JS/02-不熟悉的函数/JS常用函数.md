# JS常用函数

> 2024年5月31日开始记录

## 数组方法

### `Array.prototype.slice()`

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#%E8%AF%AD%E6%B3%95)

在JavaScript中，`Array.prototype.slice()`方法返回一个**新的数组对象**，这个新数组对象是一个由开始和结束（不包括结束,即左闭右开）决定的原数组的**浅拷贝**。**原始数组不会被改变**。

`slice()`方法接受两个参数：`start`和`end`。这两个参数都可以是负数。

- `start`：提取开始的索引位置，如果是负数，表示从**数组尾部**开始计数。
- `end`：提取结束的索引位置，如果是负数，表示从**数组尾部**开始计数。如果省略该参数，slice会一直提取到数组末尾。

~~~js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));  //等价于slic(2,-1+arr.length)即slice(2,4)
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(-2, -1));  //等价于slic(-2+arr.length,-1+arr.length)即slice(3,4)
// Expected output: Array [ "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

~~~

#### 参数

- [`start`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#start) 可选

  提取起始处的索引（从 `0` 开始），会[转换为整数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2)。如果索引是负数，则从数组末尾开始计算——如果 `start < 0`，则使用 `start + array.length`。如果 `start < -array.length` 或者省略了 `start`，则使用 `0`。如果 `start >= array.length`，则不提取任何元素。

- [`end`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#end) 可选

  提取终止处的索引（从 `0` 开始），会[转换为整数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2)。`slice()` 会提取到但不包括 `end` 的位置。如果索引是负数，则从数组末尾开始计算——如果 `end < 0`，则使用 `end + array.length`。如果 `end < -array.length`，则使用 `0`。如果 `end >= array.length` 或者省略了 `end`，则使用 `array.length`，提取所有元素直到末尾。如果 `end` 在规范化后小于或等于 `start`，则不提取任何元素。