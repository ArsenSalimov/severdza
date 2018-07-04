// TODO implement seppare configs for different environments

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        publicPath: '/build/',
        chunkFilename: '[name].bundle.js',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: 'app/images/[hash]-[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devtool: "eval-source-map"
};