/*
 * @Author: liming
 * @Date: 2021-07-20 20:01:43
 * @LastEditTime: 2021-07-20 20:12:10
 * @FilePath: \01-尚硅谷李强\02-代码手敲\01-Promise的基本使用\05-util.promiseify方法.js
 */

/**
 * util.promisify 方法
 */

//引入 util 模块
const util = require('util');
//引入 fs 模块
const fs = require('fs');
//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile)
mineReadFile('./resource/content.txt').then(value => {
    console.log(value.toString());
})