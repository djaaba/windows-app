const path = require('path')
// const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '/src'),
    dist: path.join(__dirname, '/dist'),
    assets: 'assets/'
}

module.exports = {
    mode: 'development',
    entry: {
        main: './src/script.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        open: true,
        port: 4200
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
}