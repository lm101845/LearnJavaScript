"use strict";
/**
 * @Author liming
 * @Date 2022/9/26 22:16
 **/
Object.defineProperty(exports, "__esModule", { value: true });
//定义函数的4种方式
function add1(x, y) {
    return x + y;
}
let add2;
//注意：后3种只是函数类型的定义，而并没有真正的实现
//在TS中对函数参数个数有严格要求(多一个少一个都不行)，形参和实参必须一一对应
add1(1, 2);
//注意：可选参数必须位于必选参数之后
function add5(x, y) {
    return y ? x + y : x;
}
add5(2);
//为参数提供默认值
//注意：在必选参数前，默认参数是不可以省略的,必须明确的传入undefined来获取它的默认值
function add6(x, y = 0, z, q = 1) {
    return x + y + z + q;
}
console.log(add6(1, undefined, 3), 'add');
//剩余参数
function add7(x, ...rest) {
    //这个是剩余参数，它是数组，和arguments对象是有区别的
    //https://www.jianshu.com/p/c3ee2c85f662
    return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add7(1, 2, 3, 4, 5));
function add8(...rest) {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}
console.log(add8(1, 2));
console.log(add8('a', 'b', 'c'));
exports.default = {};
