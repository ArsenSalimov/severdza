let config;

if (process.env.NODE_ENV === 'production') {
    config = require('./webpack/webpack-prod-config')
} else {
    config = require('./webpack/webpack-dev-config')
}

module.exports = config;