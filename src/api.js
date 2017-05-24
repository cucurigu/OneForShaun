'use strict';

var _config = require('./config');

function api() {

    this.config = {};

    this.console = console; // default

    this.setConfig = function(conf) {
        if (typeof conf === 'object') {
            this.config = conf;
            if (typeof conf.console === 'object') {
                this.console = conf.console; // overwrite default console
            }
        }
        return this;
    };

    this._isFunctionOrObject = function(item) {
        return (typeof item === 'object' || typeof item === 'function');
    };

    this._sanity = function(params) {
        this.console.info('---');
        this.console.info(params.method);
        this.console.info(params.protocol + ': ' + params.path);
        try {
            var a = [];
            for (var label in params.passed) {
                if (this._isFunctionOrObject(params.passed[label])) a.push(label);
            }
            if (a.length > 0) {
                throw new Error(
                    'Path: ' + params.path
                    + ', Method: ' + params.method
                    + ', Missing: ' + a.join(', ')
                );
            }
        } catch (err) {
            this.console.info(err.message);
            throw err; // rethrow for framework
        }
    };

    this.userLogin = function(req, res, next) {
        this._sanity({
            protocol: 'POST',
            method: 'api.userLogin',
            path: '/api/login',
            passed: {
                // Next: next, // only if required
                Request: req,
                Response: res
            }
        });


        next();
    };

    this.userDetails = function(req, res, next) {
        this._sanity({
            protocol: 'GET',
            method: 'api.userDetails',
            path: '/api/user-details',
            passed: {
                // Next: next, // only if required
                Request: req,
                Response: res
            }
        });


        next();
    };

    this.oauthToken = function(req, res, next) {
        this._sanity({
            protocol: 'GET',
            method: 'api.oauthToken',
            path: '/api/oauth/details',
            passed: {
                // Next: next, // only if required
                Request: req,
                Response: res
            }
        });


        next();
    };

    this.oauthAuthorize = function(req, res, next) {
        this._sanity({
            protocol: 'POST',
            method: 'api.oauthAuthorize',
            path: '/api/oauth/authorize',
            passed: {
                // Next: next, // only if required
                Request: req,
                Response: res
            }
        });


        next();
    };
}

module.exports = (function (config) {
    return (new api()).setConfig(_config) // from config
        .setConfig(config); // then injected overwrites it (if provided)
});