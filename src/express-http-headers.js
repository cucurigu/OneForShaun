'use strict';

var config = require('./config'),
    headers = {
        applicationName: config.package.name,
        applicationVersion: config.package.version
    };

if (config.express.cors === true) {
    headers['Access-Control-Allow-Origin'] = '*';
}

module.exports = headers;
