/*
 * @Author: liming
 * @Date: 2021-05-24 13:31:19
 * @LastEditTime: 2021-07-13 18:44:56
 * @FilePath: \01-AJAX\02-尚硅谷李强\02-代码手敲\server.js
 */
// 1.先引入express
const express = require('express')

//2.创建应用对象
const app = express()

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头之设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应
    response.send('hello-ajax-get')
})

// app.post('/server', (request, response) => {
// 把post请求改成all，不然会报错，method为options
// all表示可以接收任何类型的请求，包括options
app.all('/server', (request, response) => {
    // 设置响应头之设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('hello-ajax-post')
})

app.all('/json-server', (request, response) => {
    // 设置响应头之设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')

    //响应一个数据
    // 我想把这个对象返回给客户端浏览器
    //这个对象不能直接通过res.send()发送！！！因为send()方法里面只能接收字符串和buffer,不能接收对象
    // 所以我们需要对这个对象进行一个转化
    const data = {
       name:'liming' 
    }

    //对对象进行字符串转换(对象=>字符串)
    let str = JSON.stringify(data);
    // 设置响应体
    // response.send('hello-ajax-json')
    response.send(str)
})

// 4.最后一步：监听端口，启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中');
})