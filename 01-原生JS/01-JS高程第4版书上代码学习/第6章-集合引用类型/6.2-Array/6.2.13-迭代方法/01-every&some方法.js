/*
 * @Author: liming
 * @Date: 2021-05-25 18:50:49
 * @LastEditTime: 2021-05-25 18:52:55
 * @FilePath: \6.2.13-迭代方法\01.js
 */
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let everyResult = numbers.every((item, index, array) => item > 2)

console.log(everyResult)    //false

let someResult = numbers.some((item, index, array) => item > 2);

console.log(someResult); // true