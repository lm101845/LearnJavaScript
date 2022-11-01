const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts','.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options:{
                        transpileOnly: false
                        //只做语言转换，而不做类型检查，这样更快
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        new ForkTsCheckerWebpackPlugin()
    ]
}
