'use strict';

var _instance  = { obj: null };

function ExpressApp() {

    this._id  = '';
    this._app = {};
    this._views = '';
    this.xa = {};
    this.console = console;

    this.name = function(obj) {
        if (typeof obj !== 'object') {
            return '';
        } else {
            return (obj.constructor && obj.constructor.name) ? obj.constructor.name : 'object';
        }
    };

    this.instance = function(mock) {
        if (_instance.obj === null) {
            _instance.obj = (typeof mock !== 'object') ? (new ExpressApp()) : mock;
            _instance.obj.xa.config     = require('./../config');
            _instance.obj.xa.cfg        = _instance.obj.xa.config.express;
            _instance.obj.xa.express    = require('express');
            _instance.obj.xa.router     = _instance.obj.xa.express.Router();
            _instance.obj.xa.app        = _instance.obj.xa.express();
            _instance.obj.xa.bodyParser = require('body-parser');
        }
        return _instance.obj;
    };


    this.httpHeaders = function() {
        // adding app-seocific headers
        this.xa.app.use(function(req, res, next) {
            var httpHeaders = require('./http-headers');
            for (var k in httpHeaders) res.setHeader(k, httpHeaders[k]);
            // removing express footprint
            res.removeHeader('X-Powered-By'); // good practice
            return next();
        });
        return this;
    };

    this.viewsStatic = function(directory) {
        this._views = directory;
        this.xa.app.use(this.xa.express.static(directory));
        return this;
    };

    this.apiRoutes = function(root) {
        this._apiRoot = root;
        this.xa.router.get('/', function(req, res){
            res.json({
                path: root + '/',
                error: false,
                message: 'Application ' + cfg.appname + ' is up on port ' + cfg.port
            });
        });
        this.xa.app.use(root, this.xa.router); // API only
        return this;
    };

    this.run = function() {
        this.console.info(this.xa.cfg.appname + ' is running on port ' + this.xa.cfg.port);
        this.console.info('Open: http://127.0.0.1:' + this.xa.cfg.port +'/');
        this.xa.app.listen(this.xa.cfg.port);
        return this;
    };
}

module.exports = (new ExpressApp());