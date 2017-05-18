'use strict';

var _config   = require('./config'),
    _mockAuth = require('./auth/mock'),
    _restAuth = require('./auth/wsd'),
    _payload = {
        mock: true
    };

function _choose(mock) {
    return (typeof mock !== 'undefined' && envelope.mock === true) ? _mockAuth.instance(_config) : _restAuth.instance(_config);
}

function contextualize(envelope) {
    // adds session specific from middleware
    return envelope; // and return
}

function authorize(envelope) {
    envelope = contextualize(envelope);
    return _choose(envelope.mock).authorize(envelope);
}

function token(envelope) {
    envelope = contextualize(envelope);
    return _choose(envelope.mock).token(envelope);
}

module.exports = {
    mock: function() { return _payload.mock; },
    orize: authorize,
    token: token,
    name: 'auth',
    version: '0.0.1',
    published: '2017-05-18',
    md5: require('md5-file').sync(__filename)
};