const baseConfig = require('../webpack.base.config');
const merge = require('webpack-merge');

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',
    target: 'node',
    devtool: 'source-map',
    mode: isProduction ? 'production' : 'development',
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
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
        new VueSSRServerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
});