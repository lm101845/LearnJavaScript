/**
 * @Author liming
 * @Date 2024/5/24 11:02
 **/
var myObject = {};
Object.defineProperty(
    myObject,
    "a",
// 让 a 像普通属性一样可以枚举
    {enumerable: true, value: 2}
);
Object.defineProperty(myObject,
    "b",
// 让 b 不可枚举
    {enumerable: false, value: 3}
);
console.log(myObject.propertyIsEnumerable("a")) // true
console.log(myObject.propertyIsEnumerable("b")); // false
console.log(Object.keys(myObject)); // ["a"]
console.log(Object.getOwnPropertyNames(myObject)); // ["a", "b"]

//in 和 hasOwnProperty(..) 的区别在于是否查找 [[Prototype]] 链，
// 然而， Object.keys(..)和 Object.getOwnPropertyNames(..) 都只会查找对象直接包含的属性。

//使用 for..in 遍历对象是无法直接获取属性值的，因为它实际上遍历的是对象中的所有可
// 枚举属性，你需要手动获取属性值。

// 遍历数组下标时采用的是数字顺序（ for 循环或者其他迭代器），但是遍历对
// 象属性时的顺序是不确定的，在不同的 JavaScript 引擎中可能不一样。因此，
// 在不同的环境中需要保证一致性时，一定不要相信任何观察到的顺序，它们
// 是不可靠的。


// 和数组不同，普通的对象没有内置的 @@iterator ，所以无法自动完成 for..of 遍历。之所
// 以要这样做，有许多非常复杂的原因，不过简单来说，这样做是为了避免影响未来的对象

