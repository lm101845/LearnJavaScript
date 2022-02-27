/*
 * @Author: liming
 * @Date: 2021-07-28 15:53:31
 * @LastEditTime: 2021-07-28 16:22:27
 * @FilePath: \02-尚硅谷李强\02-代码手敲\跨域\01-同源策略\server.js
 */
//导入express模块
const express = require('express');

//创建express模块示例
const app = express();

app.get('/home',(req,res) => {
    // res.send('Home page')
    res.sendFile(__dirname + '/index.html')
    // 这里调整一下，要写绝对路径
})

app.get("/data", (req, res) => {
  res.send('用户数据')
  // 这里调整一下，要写绝对路径
});

//调用app.listen方法,指定端口号并启动服务器
app.listen(8000, () => {console.log('Express server running at http://127.0.0.1')})