const vue = require('vue');
const path = require('path');
const express = require('express');
const fs = require('fs');
const {createBundleRenderer} = require('vue-server-renderer');

const server = express();

server.use('/build', express.static(path.resolve(__dirname, './build')));

const serverBundle = require('./build/vue-ssr-server-bundle.json');
const clientManifest = require('./build/vue-ssr-client-manifest.json');

const template = fs.readFileSync('./build/index.html', 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    clientManifest,
    template
});

server.get('*', (req, res) => {
    renderer.renderToString((err, html) => {
        res.end(html);
    })
});

server.listen(8080);