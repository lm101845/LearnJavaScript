const {merge} = require('webpack-merge');
/**
 * 从webpack-merge5.0.3 及更高版本开始，则需要使用：const {merge} = require('webpack-merge');
 */
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

let config = process.env.NODE_ENV === 'development' ? devConfig : proConfig

module.exports = merge(baseConfig, config)
