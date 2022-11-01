"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author liming
 * @Date 2022/10/21 15:24
 **/
exports.default = {};
let obj = {
    a: 1,
    b: 2,
    c: 3
};
function getValues(obj, keys) {
    return keys.map(key => obj[key]);
}
console.log(getValues(obj, ['a', 'b']));
console.log(getValues(obj, ['e', 'f']));
let key;
//索引访问操作符 T[K]
let value;
//泛型约束 T extends U
//改造getValues函数(使得keys里面的元素一定是Obj里面的属性)
function getValues1(obj, keys) {
    //让K继承Obj所有属性的联合类型
    return keys.map(key => obj[key]);
}
console.log(getValues1(obj, ['a', 'b']));
// console.log(getValues1(obj,['e','f']))
//此时TS的类型检查就发挥作用了
//索引类型可以实现对对象属性的查询和访问
