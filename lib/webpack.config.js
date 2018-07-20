const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/Fre.js',
    output: { 
        path: path.resolve(__dirname, './'),
        filename: 'test/Fre.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './test/index.html',
            template: './src/index.html',
            inject:'head'
        }),
        new CleanWebpackPlugin(['test'])
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: [ path.resolve(__dirname, 'node_modules')],
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
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
            }
        ]
    },
    devServer: {
        open: true,
        port:9000,
        contentBase: './src/'
    },
    mode: "development",
    devtool:"#source-map"

};  