'use strict';

var _type = '',
    _tmp = '',
    _env = {
        type: null,
        name: ''
    };

function _name(obj) {
    if (obj === null) {
        return '';
    } else if (typeof obj === 'object' && obj.constructor && obj.constructor.toString && typeof obj.constructor.toString === 'function') {
        _tmp = obj.constructor.toString().match(/function (\w*)/)[1];
        return (_tmp === 'Object') ? '' : _tmp;
    } else if (typeof obj === 'function' && obj.name && obj.name.toString && typeof obj.name.toString === 'function') {
        return obj.name.toString();
    } else {
        return '';
    }
}

function _reflect(item) {
    if (item === null) {
        _type = 'null';
    } else {
        _type = typeof item;
    }
    _env.type = _type;
    _env.name = _name(item);

    return _env;
}

module.exports = function reflect(subject) {
    return _reflect(subject);
};