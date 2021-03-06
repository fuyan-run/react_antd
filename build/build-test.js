const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');
const CONF = require('./config/index.js');

module.exports = merge(base, {
    plugins: [
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(CONF.test),
        })
    ]
})