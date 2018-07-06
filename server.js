const path = require('path');
const express = require('express');
const compression = require('compression');
const http = require('http');
const fs = require('fs');
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundle = require('./build/vue-ssr-server-bundle.json');
const clientManifest = require('./build/vue-ssr-client-manifest.json');

const app = express();
const isProduction = process.env.NODE_ENV === 'production';

const template = fs.readFileSync('./build/index.html', 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    clientManifest,
    template
});

app.use('/build', express.static(path.resolve(__dirname, './build')));
app.use(compression());

if (!isProduction) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack/client');

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/build',
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
    renderer.renderToString((err, html) => {
        res.end(html);
    })
});

const server = http.createServer(app);
server.listen(8080);