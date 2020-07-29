const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const CONF = require('./config/index.js');

const pathResolve = src => {
    return path.resolve(__dirname, src)
}

module.exports = {
    mode: 'production',
    // devtool: 'none',
    entry: [
        pathResolve('../src/index.js')
    ],
    output: {
        publicPath: CONF.publicPath,
        filename: './js/[name].[hash].js',
        chunkFilename: './js/[name].[hash].js'
    },
    resolve: {  
        extensions: ['.js','.jsx'],
        alias: {
            '@': pathResolve('../src'),
            'view': pathResolve('../src/view')
        }
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'antd': 'antd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [pathResolve('../node_modules')],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                exclude: [pathResolve('../node_modules')],
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
                    pathResolve('../node_modules/antd/dist'),
                    pathResolve('../src')
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
                exclude: [pathResolve('../node_modules')],
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
                exclude: [pathResolve('../node_modules')],
                options: {
                    limit: 10000,
                    publicPath: '../',
                    name: './fonts/[name].[hash:6].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                exclude: [pathResolve('../node_modules')],
                options: {
                    name: './media/[name].[hash:6].[ext]?'
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].[chunkhash:6].css',
            chunkFilename: './common/[name].[chunkhash:6].css',
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new HtmlWebpackPlugin({
            title: 'webpack 4.43.0',
            template: pathResolve('./tepHtml/dev.html')
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        })
    ],
    // externals: {
    //     antd: 'antd'
    // },
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
