const path = require('path');
const express = require('express');
const spdy = require('spdy');
const compression = require('compression');
const http = require('http');
const fs = require('fs');
const request = require('request');
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

app.use(compression({
    filter: () => true
}));
app.use('/build/', express.static(path.resolve(__dirname, './build/')));
app.use('/.well-known/', express.static(path.resolve(__dirname, './.well-known/')));
app.use('/', express.static(path.resolve(__dirname, './public/')));

app.all('/api/*', (req, res) => {
    const url = 'http://localhost:3000' + req.url;
    req.pipe(request(url)).pipe(res);
});

if (!isProduction) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack/client');

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/build/',
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.all('*', (req, res, next) => {
    if (req.headers.host.match(/^www\..*/i)) {
        res.writeHead(301, {Location: `https://${req.headers.host.substring(4)}${req.url}`});
        res.end();
    } else {
        next();
    }
});

app.get('*', (req, res) => {
    const context = {url: req.url};

    renderer.renderToString(context, (err, html) => {
        if (!err) {
            res.end(html);
        } else {
            if (err === 'unknown route') {
                const schema = isProduction ? 'https' : 'http';
                res.writeHead(301, {Location: `${schema}://${req.headers.host}`});
                res.end();
            }
        }

    })
});

function listenServer() {
    return error => {
        if (error) {
            console.error(error);
            return process.exit(1);
        } else {
            console.log(`Server started`);
        }
    }
}

if (isProduction) {
    const options = {
        key: fs.readFileSync('/etc/letsencrypt/live/xn----8sbfgebb4c0aakelfdq4d4j.xn--p1ai/privkey.pem', 'utf8'),
        cert: fs.readFileSync('/etc/letsencrypt/live/xn----8sbfgebb4c0aakelfdq4d4j.xn--p1ai/cert.pem', 'utf8')
    };

    spdy
        .createServer(options, app)
        .listen(443, listenServer());

    http
        .createServer((req, res) => {
            res.writeHead(301, {Location: `https://${req.headers.host}${req.url}`});
            res.end();
        })
        .listen(80);
} else {
    http.createServer(app)
        .listen(8080, listenServer());
}