'use strict';

var _config   = require('./config'),
    _mockAuth = require('./auth/mock'),
    _restAuth = require('./auth/wsd'),
    _payload = {
        mock: true
    };

function contextualize(envelope) {
    // adds session specific from middleware
    return envelope;
}

function authorize(envelope) {

}

function token(envelope) {

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