/**
 * @Author liming
 * @Date 2024/5/24 10:58
 **/
var myObject = { };
Object.defineProperty(
    myObject,
    "a",
    // 让 a 像普通属性一样可以枚举
    { enumerable: true, value: 2 }
);
Object.defineProperty(
    myObject,
    "b",
    // 让 b 不可枚举
    { enumerable: false, value: 3 }
);
console.log(myObject.b); // 3
console.log(("b" in myObject)); // true
console.log(myObject.hasOwnProperty( "b" )); // true
// .......
for (var k in myObject) {
    console.log( k, myObject[k] );
}
// "a" 2
/**
 * 可以看到， myObject.b 确实存在并且有访问值，但是却不会出现在 for..in 循环中（尽管
 * 可以通过 in 操作符来判断是否存在）。原因是“可枚举”就相当于“可以出现在对象属性
 * 的遍历中”。
 */

/**
 * 在数组上应用 for..in 循环有时会产生出人意料的结果，因为这种枚举不
 * 仅会包含所有数值索引，还会包含所有可枚举属性。最好只在对象上应用
 * for..in 循环，如果要遍历数组就使用传统的 for 循环来遍历数值索引。
 */

/**
 * for...in 循环只会迭代可枚举的非符号属性。从内置构造函数（如 Array 和 Object）创建的对象会从 Array.prototype
 * 和 Object.prototype 继承不可枚举属性，
 * 例如 Array 的 indexOf() 方法或 Object 的 toString() 方法，它们在 for...in 循环中不会被访问到。
 */