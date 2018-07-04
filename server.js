const vue = require('vue');
const path = require('path');
const express = require('express');
const fs = require('fs');
const createApp = require('./build/server-bundle').default;

const server = express();

server.use('/build', express.static(path.resolve(__dirname, './build')));

const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync('./build/index.html', 'utf-8')
});

server.get('*', (req, res) => {
    const app = createApp();

    renderer.renderToString(app, (err, html) => {
        res.end(html);
    })
});

server.listen(8080);