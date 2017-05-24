'use strict';

var config = require('./config');

module.exports = {
    applicationName: config.package.name,
    applicationVersion: config.package.version,
    'Access-Control-Allow-Origin': config.app.url.Callback
};
