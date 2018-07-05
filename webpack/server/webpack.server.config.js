const baseConfig = require('../webpack.base.config');
const merge = require('webpack-merge');

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',
    target: 'node',
    devtool: 'source-map',
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
        new VueSSRServerPlugin()
    ]
});