const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const base = require('./base.js');
const conf = require('./config/index.js');
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
        stats: "errors-only",
        contentBase: pathResolve('dist'),
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
        new webpack.DefinePlugin({
            "CONFIG": JSON.stringify(conf.dev),
        })
    ]
})