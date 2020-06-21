const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { resolve } = require('path');

const pathResolve = src => {
    return path.resolve(__dirname, src)
}

module.exports = {
    // mode: 'production',
    // devtool: 'none',
    mode: 'development',
    entry: [
        pathResolve('./src/index.js')
    ],
    output: {
        filename: './js/[name].[hash].js',
        chunkFilename: './js/[name].[hash].js'
    },
    resolve: {  
        extensions: ['.js','.jsx'],
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.css$/,
                include: [
                    resolve('./node_modules/antd/dist'),
                    resolve('./src')
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: './img/[name].[hash:6].[ext]',
                        },
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    limit: 10000,
                    publicPath: '../',
                    name: './fonts/[name].[hash:6].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    name: './media/[name].[hash:6].[ext]?'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack 4.43.0',
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new FriendlyErrors({
        //     compilationSuccessInfo: {
        //         messages: [
        //             `编译成功 运行于http://localhost:9000`
        //         ]
        //     }
        // }),
        new MiniCssExtractPlugin({
            filename: './css/[name].[chunkhash:6].css',
            chunkFilename: './common/[name].[chunkhash:6].css',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
    ],
    devServer: {
        port: 9000,
        // hotOnly: true,
        hot: true,
        compress: true,
        contentBase: pathResolve('dist'),
        stats: "errors-only",
        // quiet: true,
    },
    externals: {
        // axios: 'axios',
        // echarts: 'echarts',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: './common/[name].[hash:6].js'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    filename: './common/[name].[hash:6].js'
                }
            }
        }
    }
}