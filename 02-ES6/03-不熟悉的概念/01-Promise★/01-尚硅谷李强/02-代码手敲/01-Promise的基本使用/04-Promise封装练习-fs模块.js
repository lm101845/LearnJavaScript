/*
 * @Author: liming
 * @Date: 2021-07-20 19:55:07
 * @LastEditTime: 2021-10-03 06:58:37
 * @FilePath: \01-尚硅谷李强\02-代码手敲\01-Promise的基本使用\04-Promise封装练习-fs模块.js
 */

/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数:  path  文件路径
 * 返回:  promise 对象
 */

// 注意：这段代码只能在Node环境中才可以运行
function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        // 返回一个Promise实例对象
        require('fs').readFile(path, (err, data) => {
            //判断
            if (err) reject(err);
            //成功
            resolve(data);
        })
    })
}

mineReadFile('./resource/content.txt').then(value => {
    //输出文件内容
    console.log(value.toString());
}, reason => {
    console.log(reason);
})
//因为它的返回结果是一个Promise对象，所以我们后面可以直接跟点
