//create-react-app在启动的时候会自动调用这个配置文件
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/**/*.action', {
        //这里把以api为开头，以action为结尾的请求都代理到本地的4000端口
        target: 'http://localhost:4000',
        pathRewrite(path) {
            return path.replace('/api', '/').replace('.action', '.json');
        }
    }));
};
