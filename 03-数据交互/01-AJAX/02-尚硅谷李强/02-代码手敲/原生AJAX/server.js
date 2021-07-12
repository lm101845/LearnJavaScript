/*
 * @Author: liming
 * @Date: 2021-05-24 13:31:19
 * @LastEditTime: 2021-05-24 14:42:56
 * @FilePath: \Learn-AJAX-and-Axios\01-AJAX\01-尚硅谷李强\02-handwriting\原生AJAX\server.js
 */
// 1.先引入express
const express = require('express')

//2.创建应用对象
const app = express()

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头之设置允许跨域(但是谷歌浏览器还是不行)
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    response.send('hello ajax')
})

// 4.最后一步：监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中');
})