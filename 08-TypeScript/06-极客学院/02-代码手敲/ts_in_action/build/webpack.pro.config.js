const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//它的作用是在本次成功构建之后，帮助我们清空dist目录

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}
