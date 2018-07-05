const webpack = require('webpack');
const baseConfig = require('../webpack.base.config');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/entry-client.js'
    ],
    target: 'web',
    module: {
      rules: [
          {
              test: /\.vue$/,
              exclude: /node_modules/,
              loader: 'vue-loader'
          },
      ]
    },
    plugins: [
      /*  new BundleAnalyzerPlugin({
            openAnalyzer: false
        }) */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Сердце Севастополя'
        }),
        new VueSSRClientPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});