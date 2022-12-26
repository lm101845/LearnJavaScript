/**
 * @Author liming
 * @Date 2022/12/26 14:45
 **/

const express = require('express');
const app = express();
const {createProxyMiddleware}=require('http-proxy-middleware')
app.use(express.static('./public'));

app.use('/api',createProxyMiddleware({
    // target:'http://localhost:8080',
    target:'http://lm2048.top:8888/',
    //为了更加真实，我访问我自己阿里云上的服务器的内容
    changeOrigin:true,
    pathRewrite:{
        "^/api":""
    }
}))

app.get('/local/new', (req, res) => {
    res.status(201).json({ msg:222222 });
});

app.listen(3000);

