const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    mode : 'development',
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : 'index.html',
        })
    ]
});