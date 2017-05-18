'use strict';

var _auth = null;

function _wsdAuth() {

    this.config = {};

    this.instance = function(config) {
        if (typeof config === 'object') {
            this.config = config;
        }
        return this;
    };

    this.authorize = function(envelope) {
        throw new Error('@todo: _mockAuth.authorize');
    };

    this.token = function(envelope) {
        throw new Error('@todo: _mockAuth.token');
    };
}

if (_auth === null) {
    _auth = new _wsdAuth();
}

module.exports = _auth.instance(require('./../config'));