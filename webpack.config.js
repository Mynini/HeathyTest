const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './lib/src/tool.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'lib/test/tool.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './lib/test/index.html',
            template: './lib/src/index.html',
            inject: "head"

        }),
        new CleanWebpackPlugin(['./lib/test'])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader' ,
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[name]-[local]_[hash:base64:6]'
                        }
                    }
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [ {
                    loader:"url-loader",
                    options:{
                        limit:10000 //kb
                    }
                } ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: [ 'file-loader' ]
            }
        ]
    },
    devServer:{
        open:true,
        contentBase: './src/common',
        // 服务器打包资源后的输出路径
        publicPath: '/'
    }
};
