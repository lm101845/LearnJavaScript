/*
 * @Author: liming
 * @Date: 2021-05-25 18:56:54
 * @LastEditTime: 2021-05-25 18:58:08
 * @FilePath: \6.2.13-迭代方法\04-forEach方法.js
 */
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

numbers.forEach((item, index, array) => {
    // 执行某些操作
    console.log('今天天气晴朗');
})

// 这个方法只会对每一项运行传入的函数，没有返回值。本质上， forEach() 方法相当于使用for 循环遍历数组。