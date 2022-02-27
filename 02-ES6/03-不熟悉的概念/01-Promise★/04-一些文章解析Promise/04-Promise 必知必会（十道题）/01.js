/*
 * @Author: liming
 * @Date: 2021-08-12 05:37:55
 * @LastEditTime: 2021-08-12 05:40:36
 * @FilePath: \01-Promise★\04-一些文章解析Promise\04-Promise 必知必会（十道题）\01.js
 */
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve()
    console.log(2);
})

promise.then(() => {
    console.log(3);
})

console.log(4);

// 我猜的：1 2 4 3——猜对了