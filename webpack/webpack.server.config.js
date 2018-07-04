const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',
    target: 'node',
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
        ]
    },
    plugins: [

    ]
});