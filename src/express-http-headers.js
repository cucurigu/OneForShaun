'use strict';

var config = require('./config');

module.exports = (function () {
    return function (req, res, next) {
        res.setHeader("applicationName", config.package.name);
        res.setHeader("applicationVersion", config.package.version);
        res.setHeader("Access-Control-Allow-Origin", config.app.url.Callback);
        next();
    };
})();
