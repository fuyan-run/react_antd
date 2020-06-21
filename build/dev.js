const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const base = require('./base.js');
const path = require('path');

const pathResolve = src => {
    return path.resolve(__dirname, src)
}
module.exports = merge(base, {
    mode: 'development',
    devServer: {
        port: 9000,
        hot: true,
        compress: true,
        contentBase: pathResolve('dist'),
        stats: "errors-only",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrors({
            compilationSuccessInfo: {
                messages: [
                    `编译成功 运行于http://localhost:9000`
                ]
            }
        }),
    ]
})