// 这个文件名不能改，固定的
// 而且里面用的是Common.js语法，服务器模块化

const proxy = require('http-proxy-middleware');

// 引入一个内置的模块，不需要单独下载的
// 在你初始化脚手架的时候就已经下载好了

module.exports = function(app) {
    app.use(proxy('/api/**/*.action', {
        //我们把以api开头，action结尾的请求都代理到本地的4000端口
        //然后修改了一下请求的path,把api去掉了，把action替换成了json
        //这样在开发环境中，访问后端的接口，就会代理到本地的json
        //而在生产环境中，我们的代码也不必修改
        target: 'http://localhost:4000',
        pathRewrite(path) {
            return path.replace('/api', '/').replace('.action', '.json');
        }
    }));

    // app.use(proxy('/api', {
    //     target: 'http://localhost:4000',
    //     pathRewrite(path) {
    //         return path.replace(/^\/api([^?]+)/, '$1.json');
    //     }
    // }));

    // app.use(proxy('/api', {   //不能什么都走代理吧，只有遇见/api前缀的请求，才会触发该代理配置
    //     target: 'http://localhost:4000',   //请求转发给谁
    //     changeOrigin: true,  //控制服务器收到的响应头中Host字段的值
    //     // 默认值是false，我们要把它修改为true,更安全——撒谎
    //     pathRewrite:{'^/api':''}   //重写请求路径——不写的话会产生严重问题(/api用于标记哪个请求用代理，利用完后就把/api1替换为空字符串)
    // }));
};
