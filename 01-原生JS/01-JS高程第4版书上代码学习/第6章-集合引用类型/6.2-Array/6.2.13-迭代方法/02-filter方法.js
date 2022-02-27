/*
 * @Author: liming
 * @Date: 2021-05-25 18:53:46
 * @LastEditTime: 2021-05-25 18:54:56
 * @FilePath: \6.2.13-迭代方法\02-filter方法.js
 */
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let filterResult = numbers.filter((item, index, array) => item > 2)

console.log(filterResult);
// [ 3, 4, 5, 4, 3 ]