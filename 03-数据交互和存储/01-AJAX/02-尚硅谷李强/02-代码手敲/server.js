/*
 * @Author: liming
 * @Date: 2021-05-24 13:31:19
 * @LastEditTime: 2021-07-28 18:34:06
 * @FilePath: \02-尚硅谷李强\02-代码手敲\server.js
 */
// 1.先引入express
const express = require("express");

//2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get("/server", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应
  response.send("hello-ajax-get");
});

// app.post('/server', (request, response) => {
// 把post请求改成all，不然会报错，method为options
// all表示可以接收任何类型的请求，包括options
app.all("/server", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  //响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  response.send("hello-ajax-post");
});

app.all("/json-server", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  //响应头
  response.setHeader("Access-Control-Allow-Headers", "*");

  //响应一个数据
  // 我想把这个对象返回给客户端浏览器
  //这个对象不能直接通过res.send()发送！！！因为send()方法里面只能接收字符串和buffer,不能接收对象
  // 所以我们需要对这个对象进行一个转化
  const data = {
    name: "liming",
  };

  //对对象进行字符串转换(对象=>字符串)
  let str = JSON.stringify(data);
  // 设置响应体
  // response.send('hello-ajax-json')
  response.send(str);
});

//针对ID缓存的规则
app.get("/ie", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  //响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  response.send("hello-ajax-ie-3");
});

//延时响应
app.all("/delay", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  //响应头
  // response.setHeader("Access-Control-Allow-Headers", "*");
  //加个定时器，3秒后才把结果返回给客户端
  setTimeout(() => {
    // 设置响应体
    response.send("3秒后才响应");
  }, 3000);
});

//jquery服务
app.all("/jquery-server", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  //响应头
  // response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  const data = { name: "尚硅谷" };
  //   response.send("hello jquery ajax");
  response.send(JSON.stringify(data));
});

//axios服务
app.all("/axios-server", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  //响应头
  // response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  const data = { name: "尚硅谷" };
  response.send(JSON.stringify(data));
});

//股票查询接口
app.all("/gu", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  //响应头
  // response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  //   const data = { name: "尚硅谷" };
  //   response.send(JSON.stringify(data));
});

//fetch服务
app.all("/fetch-server", (request, response) => {
  // 设置响应头之设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  //响应头
  // response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  const data = { name: "尚硅谷" };
  //   response.send("hello jquery ajax");
  response.send(JSON.stringify(data));
});

//jsonp服务
app.all("/jsonp-server", (request, response) => {
  // response.send('hello jsonp-server')
  // response.send('console.log("hello jsonp-server")')
  //这个请求发过去之后，要的是一个函数调用的name回来
  const data = {
    name: "尚硅谷111",
  };
  //将数据转换为字符串
  let str = JSON.stringify(data);
  //JSON.stringify:JS对象=>JSON字符串
  //返回结果
  response.end(`handle(${str})`);
  //使用end不会加特殊响应头
});

//用户名检测是否存在
app.all("/check-username", (request, response) => {
  const data = {
    exists: 1,
    msg: "用户名已经存在",
  };
  //将数据转换为字符串
  let str = JSON.stringify(data);
  //返回结果
  response.end(`handle(${str})`);
});

//使用jquery检测是否存在
app.all("/jquery-jsonp-server", (request, response) => {
  const data = {
    name: "尚硅谷",
    city: ["北京", "上海", "深圳"],
  };
  //将数据转换为字符串
  let str = JSON.stringify(data);
  //接收callback这个参数
  let cb = request.query.callback;
  //返回结果
  response.end(`${cb}(${str})`);
});

// app.all("cors-server", (request, response) => {
    // 少写一个斜杠，害的我找了半天！！
app.all("/cors-server", (request, response) => {
  //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*")
    response.setHeader("Access-Control-Allow-Method", "*")
  // response.setHeader('Access-Control-Allow-Origin','http://localhost:5500')
//   res.send("hello CORS");
    // 前面是response，后来写成了res，又找了半天。。。
  response.send("hello CORS");
});

// 4.最后一步：监听端口，启动服务
app.listen(8000, () => {
  console.log("服务已经启动，8000端口监听中");
});
