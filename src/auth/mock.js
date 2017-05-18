'use strict';

var _auth = null;

function _mockAuth() {

    this.config = {};

    this.instance = function(config) {
        if (typeof config === 'object') {
            this.config = config;
        }
        return this;
    }
}

if (_auth === null) {
    _auth = new _mockAuth();
}

module.exports = _auth.instance(require('./../config'));