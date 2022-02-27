/*
 * @Author: liming
 * @Date: 2021-05-24 13:19:43
 * @LastEditTime: 2021-05-24 13:25:41
 * @FilePath: \Learn-AJAX-and-Axios\01-AJAX\01-尚硅谷李强\02-handwriting\express框架\express基本使用.js
 */

// 1.先引入express
const express = require('express')

//2.创建应用对象
const app = express()

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/', (request, response)=>{
    // 设置响应
    response.send('hello express')
})

// 4.最后一步：监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中');
})
