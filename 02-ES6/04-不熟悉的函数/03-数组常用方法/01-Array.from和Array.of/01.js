/**
 * @Author liming
 * @Date 2024/5/31 9:02
 **/

/**
 * Array 构造函数还有两个 ES6 新增的用于创建数组的静态方法： from() 和 of() 。 from() 用于将
 * 类数组结构转换为数组实例，而 of() 用于将一组参数转换为数组实例。
 *
 * Array.from() 的第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个 length 属性
 * 和可索引元素的结构。这种方式可用于很多场合：
 */

// 字符串会被拆分为单字符数组
console.log(Array.from("Matt")); // ["M", "a", "t", "t"]
// 可以使用 from()将集合和映射转换为一个新数组
const m = new Map().set(1, 2)
    .set(3, 4);
const s = new Set().add(1)
    .add(2)
    .add(3)
    .add(4);
console.log(Array.from(m)); // [[1, 2], [3, 4]]
console.log(Array.from(s)); // [1, 2, 3, 4]

// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a1); // [1, 2, 3, 4]
console.log(a1 === a2); // false