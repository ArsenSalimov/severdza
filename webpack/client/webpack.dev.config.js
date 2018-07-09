const webpack = require('webpack');
const baseConfig = require('../webpack.base.config');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(baseConfig, {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/entry-client.js'
    ],
    target: 'web',
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    module: {
      rules: [
          {
              test: /\.vue$/,
              exclude: /node_modules/,
              loader: 'vue-loader'
          },
          {
              test: /\.css$/,
              use: [
                  'vue-style-loader',
                  'css-loader'
              ],
          },
          {
              test: /\.less$/,
              use: [
                  'vue-style-loader',
                  'css-loader',
                  'less-loader'
              ],
          },
      ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Сердце Севастополя'
        }),
        new FaviconsWebpackPlugin('./src/app/images/logo.png'),
        new VueSSRClientPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});