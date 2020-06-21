const base = require('./base.js');
const merge = require('webpack-merge');


module.exports = merge(base, {
    mode: 'production',
    plugins: [
    ]
})