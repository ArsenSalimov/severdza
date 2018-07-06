const baseConfig = require('../webpack.base.config');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
    entry: './src/entry-client.js',
    target: 'web',
    mode: 'production',
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
      /*  new BundleAnalyzerPlugin({
            openAnalyzer: false
        }) */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Сердце Севастополя'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new VueSSRClientPlugin(),
    ]
});