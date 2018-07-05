const express = require('express');
const http = require('http');
const fs = require('fs');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack/webpack.client.config');

const compiler = webpack(webpackConfig);

const {createBundleRenderer} = require('vue-server-renderer');

const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/build',
}));
app.use(webpackHotMiddleware(compiler));

const serverBundle = require('./build/vue-ssr-server-bundle.json');
const clientManifest = require('./build/vue-ssr-client-manifest.json');

const template = fs.readFileSync('./build/index.html', 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    clientManifest,
    template
});

app.get('*', (req, res) => {
    renderer.renderToString((err, html) => {
        res.end(html);
    })
});

const server = http.createServer(app);
server.listen(8080);