/*
 * @Author: liming
 * @Date: 2021-05-25 18:55:14
 * @LastEditTime: 2021-05-25 18:56:29
 * @FilePath: \6.2.13-迭代方法\03-map方法.js
 */
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let mapResult = numbers.map((item, index, arrary) => item * 2)
console.log(mapResult);
// [2, 4, 6, 8, 10,8, 6, 4, 2]