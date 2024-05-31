# Object.js用法

**Object.is()** 静态方法确定两个值是否为[相同值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#%E4%BD%BF%E7%94%A8_object.is_%E8%BF%9B%E8%A1%8C%E5%90%8C%E5%80%BC%E7%9B%B8%E7%AD%89%E6%AF%94%E8%BE%83)。

~~~js
console.log(Object.is('1', 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
~~~

`Object.is()` 确定两个值是否为[相同值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#%E4%BD%BF%E7%94%A8_object.is_%E8%BF%9B%E8%A1%8C%E5%90%8C%E5%80%BC%E7%9B%B8%E7%AD%89%E6%AF%94%E8%BE%83)。如果以下其中一项成立，则两个值相同：

- 都是 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- 都是 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/null)
- 都是 `true` 或者都是 `false`
- 都是长度相同、字符相同、顺序相同的字符串
- 都是相同的对象（意味着两个值都引用了内存中的同一对象）
- 都是 [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 且具有相同的数值
- 都是 [symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 且引用相同的 symbol 值
- 都是数字且
  - 都是 `+0`
  - 都是 `-0`
  - 都是 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)
  - 都有相同的值，非零且都不是 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)

`Object.is()` 与 [`==`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality) 运算符并不等价。`==` 运算符在测试相等性之前，会对两个操作数进行类型转换（如果它们不是相同的类型），这可能会导致一些非预期的行为，例如 `"" == false` 的结果是 `true`，但是 `Object.is()` 不会对其操作数进行类型转换。

`Object.is()` 也*不*等价于 [`===`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality) 运算符。`Object.is()` 和 `===` 之间的唯一区别在于它们处理带符号的 0 和 `NaN` 值的时候。`===` 运算符（和 `==` 运算符）将数值 `-0` 和 `+0` 视为相等，但是会将 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 视为彼此不相等。

~~~js
// 案例 1：评估结果和使用 === 相同
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// 案例 2: 带符号的 0
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// 案例 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
~~~

注意：能使用 == 和 === （参见第 4 章）时就尽量不要使用 Object.is(..) ，因为前者效率更高、更为通用。`Object.is(..) `主要用来处理那些特殊的相等比较。****