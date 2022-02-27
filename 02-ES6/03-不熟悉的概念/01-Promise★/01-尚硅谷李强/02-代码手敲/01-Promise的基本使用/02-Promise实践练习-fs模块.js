/*
 * @Author: liming
 * @Date: 2021-07-19 21:27:17
 * @LastEditTime: 2021-07-19 21:34:03
 * @FilePath: \01-尚硅谷李强\02-代码手敲\01-Promise的基本使用\02-Promise实践练习-fs模块.js
 */

//先引入fs模块
const fs = require('fs');

//读取文件之回调函数的形式
// fs.readFile('./resource/content.txt', (err, data) => {
//     //如果出错，则抛出错误
//     if (err) throw err;
//     //如果正确则输出文件内容
//     console.log(data.toString());
// })

//读取文件之使用Promise的形式进行封装
//首先先创建一个Promise对象
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        //如果出错
        if (err) reject(err);
        //如果成功
        resolve(data)
    })
})

//调用then方法来对结果进行一些处理
p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
 })
